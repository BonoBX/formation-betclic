import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableDarkComponent } from './components/table-dark/table-dark.component';


@NgModule({
  declarations: [BtnComponent, TableLightComponent, TotalPipe, StateDirective, TableDarkComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    BtnComponent,
    TableLightComponent,
    TableDarkComponent,
    TotalPipe,
    StateDirective
  ]
})
export class SharedModule { }
