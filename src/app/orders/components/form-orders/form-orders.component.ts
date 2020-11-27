import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-form-orders',
  templateUrl: './form-orders.component.html',
  styleUrls: ['./form-orders.component.scss']
})
export class FormOrdersComponent implements OnInit {

  @Input() public order: Order = new Order();
  public formGroup: FormGroup;
  public states = Object.values(StateOrder);
  @Output() public submitted: EventEmitter<any> = new EventEmitter();
  constructor(private formB: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formB.group({
      tjmHt: [this.order.tjmHt],
      nbJours: [this.order.nbJours],
      tva: [this.order.tva],
      state: [this.order.state],
      typePresta: [this.order.typePresta, Validators.minLength(2)],
      comment: [this.order.comment, Validators.compose([ Validators.required, Validators.minLength(3)])],
      client: [this.order.client, Validators.required],
      id: [this.order.id]
    });
  }

  public onSubmit() {
    this.submitted.emit(this.formGroup.value);
  }
}
