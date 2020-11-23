import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { PageListOrdersComponent } from '../orders/pages/page-list-orders/page-list-orders.component';


@NgModule({
  declarations: [BtnComponent, TableLightComponent, TotalPipe, StateDirective],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    BtnComponent,
    TableLightComponent,
    TotalPipe,
    // PageListOrdersComponent,
    StateDirective
  ]
})
export class SharedModule { }
