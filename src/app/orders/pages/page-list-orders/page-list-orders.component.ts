import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
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
  // public subscription: Subscription;

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    // this.subscription = this.orderService.collection.subscribe(
    //     (data) => {
    //       this.orderCollection = data;
    //     }
    // );
    this.orderService.refresh$.next(true);
    this.orderCollection$ = this.orderService.collection;
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

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }
}
