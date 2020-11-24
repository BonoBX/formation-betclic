import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-orders',
  templateUrl: './page-add-orders.component.html',
  styleUrls: ['./page-add-orders.component.scss']
})
export class PageAddOrdersComponent implements OnInit {

  constructor(
    private orderService: OrdersService,
    private router: Router,
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public add(item: Order) {
    this.orderService.addItem(item).subscribe(
      (res) => {
        // this.router.navigate(['orders']);
        this.router.navigate(['../', {relativeTo: this.currentRoute}]);
      }
    );
  }
}
