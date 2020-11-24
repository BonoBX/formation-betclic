import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplateAComponent } from './components/template-a/template-a.component';
import { TemplateBComponent } from './components/template-b/template-b.component';
import { TextModule } from '../text/text.module';


@NgModule({
  declarations: [TemplateAComponent, TemplateBComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule,
    TextModule
  ],
  exports: [TemplateAComponent, TemplateBComponent]
})
export class TemplatesModule { }
