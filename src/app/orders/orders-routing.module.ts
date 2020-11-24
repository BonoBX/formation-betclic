import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddOrdersComponent } from './pages/page-add-orders/page-add-orders.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';

const routes: Routes = [
  { path: "", component: PageListOrdersComponent },
  { path: "add", component: PageAddOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
