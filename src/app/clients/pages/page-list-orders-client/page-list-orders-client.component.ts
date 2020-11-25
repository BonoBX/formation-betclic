import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { OrdersService } from 'src/app/orders/services/orders.service';
import { Order } from 'src/app/shared/models/order.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-orders-client',
  templateUrl: './page-list-orders-client.component.html',
  styleUrls: ['./page-list-orders-client.component.scss']
})
export class PageListOrdersClientComponent implements OnInit, OnDestroy {
  public title: string;
  public subtitle: string;
  public headers: string[];
  public clientOrdersCollection$: Observable<Order[]>;

  public destroy$: Subject<any> = new Subject();

  constructor(
    private clientService: ClientsService,
    private orderService: OrdersService,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let clientName: string;
    this.clientOrdersCollection$ = this.currentRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.clientService.getItemById(params.get('id')).pipe(
          switchMap((client) => { return this.orderService.getItemByClientName(client.name); })
        )
      }));

    this.headers = [
      "Type",
      "Nb. jours",
      "Tjm HT",
      "Total HT",
      "Total TTC",
      "Etat"
    ];

    this.currentRoute.data.subscribe(
      (datas) => {
        this.title = `"${datas.title} { clientName }"`,
        this.subtitle = datas.subtitle
      });
  }

  ngOnDestroy() { }
}
