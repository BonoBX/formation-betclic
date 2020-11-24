import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { Router, RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import { InvalidMessageDirective } from './directives/invalid-message.directive';
import { InvalidTypeDirective } from './directives/invalid-type.directive';

@NgModule({
  declarations: [BtnComponent, TableLightComponent, TotalPipe, StateDirective, TableDarkComponent, ModalComponent, InvalidMessageDirective, InvalidTypeDirective],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule
  ],
  exports: [
    BtnComponent,
    TableLightComponent,
    TableDarkComponent,
    TotalPipe,
    StateDirective,
    ModalComponent,
    InvalidMessageDirective,
    InvalidTypeDirective
  ]
})
export class SharedModule { }
