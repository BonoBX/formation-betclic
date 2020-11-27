import { TestBed } from '@angular/core/testing';
import { OrdersRoutingModule } from 'src/app/orders/orders-routing.module';
import { Order } from './order.model';

describe('Order', () => {
  let myOrder: Order;

  beforeEach(() => {
    let dict_values = {
      tjmHt: 200,
      nbJours: 4,
      comment: "testing"
    };
    myOrder = new Order(dict_values);
  });

  it('should create an instance', () => {
    expect(new Order()).toBeTruthy();
  });

  it('should multiply nbJour with tjmHt', () => {
    //let order = new Order({tjmHt: 200, nbJours: 4});
    expect(myOrder.totalHt()).toEqual(800);
  })
});
