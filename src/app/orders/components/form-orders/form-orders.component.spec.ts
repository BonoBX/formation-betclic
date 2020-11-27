import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Order } from 'src/app/shared/models/order.model';

import { FormOrdersComponent } from './form-orders.component';

describe('FormOrdersComponent', () => {
  let component: FormOrdersComponent;
  let fixture: ComponentFixture<FormOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOrdersComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an order', () =>  {
    component.order = new Order();
    let valueTjm = component.formGroup.get('tjmHt');
    expect(valueTjm.value).toEqual(500);
  });

  it('should have a value', () =>  {
    component.order = new Order();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector("#tjmHt").value).toContain('500');
  });
});
