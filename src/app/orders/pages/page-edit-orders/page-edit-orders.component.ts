import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-orders',
  templateUrl: './page-edit-orders.component.html',
  styleUrls: ['./page-edit-orders.component.scss']
})
export class PageEditOrdersComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public order$: Observable<Order>;
  @ViewChild('updateOrderModal') public updateModalRef: TemplateRef<any>;
  public modalValues: Order;
  private currentActiveModal: NgbModalRef;

  constructor(
    private currentRoute: ActivatedRoute,
    private orderService: OrdersService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.order$ = this.currentRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.orderService.getItemById(params.get('id'));
      })
    );

     this.currentRoute.data.subscribe(
      (datas) => {
        this.title = datas.title,
        this.subtitle = datas.subtitle
      }
    )
  }

  public update(item: Order) {
    this.orderService.updateItem(item).subscribe(
      (result) => {
        this.dismissModal();
        this.router.navigate(['orders']);
      }
    )
  }

  public openUpdateModal(values) {
    this.modalValues = values;
    this.currentActiveModal = this.modalService.open(this.updateModalRef);
  }

  public dismissModal() {
    this.currentActiveModal.dismiss();
  }
}
