import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListOrdersClientComponent } from './page-list-orders-client.component';

describe('PageListOrdersClientComponent', () => {
  let component: PageListOrdersClientComponent;
  let fixture: ComponentFixture<PageListOrdersClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListOrdersClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListOrdersClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
