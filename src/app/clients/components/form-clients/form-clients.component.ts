import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-form-clients',
  templateUrl: './form-clients.component.html',
  styleUrls: ['./form-clients.component.scss']
})
export class FormClientsComponent implements OnInit {

  @Input() public client: Client = new Client();
  public formGroup: FormGroup;
  @Output() public submitted: EventEmitter<any> = new EventEmitter();
  constructor(private formB: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formB.group({
      id: [this.client.id],
      ca: [this.client.ca],
      comment: [this.client.comment, Validators.compose([ Validators.required, Validators.minLength(3)])],
      name: [this.client.name, Validators.required],
      state: [this.client.state]
    });
  }

  public onSubmit() {
    this.submitted.emit(this.formGroup.value);
  }
}
