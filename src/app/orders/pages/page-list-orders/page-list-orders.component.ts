import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ClientsService } from 'src/app/clients/services/clients.service';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Client } from 'src/app/shared/models/client.model';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {

  public headers: string[];
  public orderCollection: Order[];
  public orderCollection$: Observable<Order[]>;
  public states = Object.values(StateOrder);
  public destroy$: Subject<any> = new Subject();
  public clients: Client[];
  // public subscription: Subscription;

  constructor(
    private orderService: OrdersService,
    private clientService: ClientsService,
    private router: Router) { }

  ngOnInit(): void {
    // this.subscription = this.orderService.collection.subscribe(
    //     (data) => {
    //       this.orderCollection = data;
    //     }
    // );
    this.orderService.refresh$.next(true);
    this.orderCollection$ = this.orderService.collection;
    this.clientService.refresh$.next(true);
    this.clientService.collection.subscribe(
      (clients) => {
        this.clients = clients;
      }
    )
    this.headers = [
      "Type",
      "Client",
      "Nb. jours",
      "Tjm HT",
      "Total HT",
      "Total TTC",
      "Etat",
      "Actions"
    ]
  }

  public changeState(item: Order, event) {
    this.orderService.changeState(item, event.target.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (result) => {
          item.state = result.state;
        },
        (error) => {
          event.target.value = item.state;
        }
      )
  }

  public changeClient(item: Order, event: any) {
    this.orderService.changeClient(item, event.target.value).pipe(takeUntil(this.destroy$))
    .subscribe(
      (result) => {

      }
    )
  }

  public addOrder() {
    console.log("ajout d'une commande");
  }

  public deleteOrder(item: Order) {
    this.orderService.deleteItem(item)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res) => {
          this.orderService.refresh$.next(true);
        }
      );
  }

  public gotoEdit(item: Order) {
    this.router.navigate(['orders', 'edit', item.id]);
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }

  public getOrderByClientName(name: string) {
    this.orderService.getItemByClientName(name).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }
}
