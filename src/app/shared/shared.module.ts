import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';


@NgModule({
  declarations: [BtnComponent, TableLightComponent, TotalPipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    BtnComponent,
    TableLightComponent,
    TotalPipe
  ]
})
export class SharedModule { }
