import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { SharedModule } from '../shared/shared.module';
import { TextModule } from '../text/text.module';
import { TemplatesModule } from '../templates/templates.module';
import { FormOrdersComponent } from './components/form-orders/form-orders.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAddOrdersComponent } from './pages/page-add-orders/page-add-orders.component';
import { IconsModule } from '../icons/icons.module';
import { PageEditOrdersComponent } from './pages/page-edit-orders/page-edit-orders.component';


@NgModule({
  declarations: [PageListOrdersComponent, FormOrdersComponent, PageAddOrdersComponent, PageEditOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    TextModule,
    TemplatesModule,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class OrdersModule { }
