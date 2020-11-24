import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// import { switchMap } from 'rxjs/internal/operators/switchMap';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-clients',
  templateUrl: './page-edit-clients.component.html',
  styleUrls: ['./page-edit-clients.component.scss']
})
export class PageEditClientsComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public client$: Observable<Client>;

  constructor(
    private currentRoute: ActivatedRoute,
    private clientService: ClientsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.client$ = this.currentRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.clientService.getItemById(params.get('id'));
      })
    );

     this.currentRoute.data.subscribe(
      (datas) => {
        this.title = datas.title,
        this.subtitle = datas.subtitle
      }
    )
  }

  public update(item: Client) {
    this.clientService.updateItem(item).subscribe(
      (result) => {
        this.router.navigate(['clients']);
      }
    )
  }

  // public add(item: Client) {
  //   this.clientService.addItem(item).subscribe(
  //     (res) => {
  //       // this.router.navigate(['orders']);
  //       this.router.navigate(['../', {relativeTo: this.currentRoute}]);
  //     }
  //   );
  // }
}
