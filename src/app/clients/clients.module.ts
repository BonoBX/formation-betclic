import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { SharedModule } from '../shared/shared.module';
import { FormClientsComponent } from './components/form-clients/form-clients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAddClientsComponent } from './pages/page-add-clients/page-add-clients.component';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  declarations: [PageListClientsComponent, FormClientsComponent, PageAddClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    TemplatesModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
