import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';


@NgModule({
  declarations: [BtnComponent, TableLightComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    BtnComponent,
    TableLightComponent
  ]
})
export class SharedModule { }
