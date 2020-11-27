import { fakeAsync, TestBed } from '@angular/core/testing';
import { Order } from 'src/app/shared/models/order.model';

import { OrdersService } from './orders.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('OrdersService', () => {
  let service: OrdersService;
  // let req: any;

  let httpTesting: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    }).compileComponents();
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersService);
    // service = TestBed.get(OrdersService);
    httpTesting = TestBed.inject(HttpTestingController);
    // httpTesting = TestBed.get(HttpTestingController);
    // const req = httpTesting.expectOne('/orders');
    // req.flush({
    //   tjmHt: 500,
    //   nbJours: 1,
    //   tva: 20,
    //   state: "OPTION",
    //   typePresta: "Formation",
    //   client: "Test Alain",
    //   comment: "test",
    //   id: 3
    // });
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('collection should not be empty', fakeAsync(() => {
    let orderTest: Order;
    service.refresh$.next(true);
    service.collection.subscribe(
      (orders) => {
        orderTest = orders.find(x => x.client == "Christophe2");
      }
    );
    expect(orderTest.id).toEqual(3);
  }));
});
