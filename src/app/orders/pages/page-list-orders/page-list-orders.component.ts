import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public headers: string[];
  public orderCollection: Order[];

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.orderService.collection.subscribe(
        (data) => {
          this.orderCollection = data;
        }
    );
    this.headers = [
      "Type",
      "Client",
      "Nb. jours",
      "Tjm HT",
      "Total HT",
      "Total TTC",
      "Etat"
    ]
  }

}
