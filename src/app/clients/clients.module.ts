import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { SharedModule } from '../shared/shared.module';
import { FormClientsComponent } from './components/form-clients/form-clients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAddClientsComponent } from './pages/page-add-clients/page-add-clients.component';
import { TemplatesModule } from '../templates/templates.module';
import { PageEditClientsComponent } from './pages/page-edit-clients/page-edit-clients.component';
import { IconsModule } from '../icons/icons.module';
import { PageListOrdersClientComponent } from './pages/page-list-orders-client/page-list-orders-client.component';

@NgModule({
  declarations: [PageListClientsComponent, FormClientsComponent, PageAddClientsComponent, PageEditClientsComponent, PageListOrdersClientComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    TemplatesModule,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class ClientsModule { }
