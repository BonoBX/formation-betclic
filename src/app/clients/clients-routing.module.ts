import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddClientsComponent } from './pages/page-add-clients/page-add-clients.component';
import { PageEditClientsComponent } from './pages/page-edit-clients/page-edit-clients.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageListOrdersClientComponent } from './pages/page-list-orders-client/page-list-orders-client.component';

const routes: Routes = [
  { path: "", component: PageListClientsComponent },
  { path: "add", component: PageAddClientsComponent },
  {
    path: "edit/:id",
    component: PageEditClientsComponent,
    data: { title: "Clients", subtitle: "Edition" }
  },
  {
    path: "listOrders/:id",
    component: PageListOrdersClientComponent,
    data: { title: "Commandes du client", subtitle: "Liste des commandes du client" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
