import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { InvalidMessageDirective } from './directives/invalid-message.directive';
import { InvalidTypeDirective } from './directives/invalid-type.directive';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BtnComponent, TableLightComponent, TotalPipe, StateDirective, TableDarkComponent, ModalComponent, InvalidMessageDirective, InvalidTypeDirective, FormLoginComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    BtnComponent,
    TableLightComponent,
    TableDarkComponent,
    FormLoginComponent,
    TotalPipe,
    StateDirective,
    ModalComponent,
    InvalidMessageDirective,
    InvalidTypeDirective
  ]
})
export class SharedModule { }
