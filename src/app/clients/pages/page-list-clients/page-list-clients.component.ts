import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit, OnDestroy {

  public headers: string[];
  public clientCollection: Client[];
  public clientCollection$: Observable<Client[]>;
  public destroy$: Subject<any> = new Subject();

  constructor(
    private clientService: ClientsService,
    private router: Router) { }

  ngOnInit(): void {
    // this.clientService.collection.subscribe(
    //   (data) => {
    //     this.clientCollection = data;
    //   }
    // )
    this.clientService.refresh$.next(true);
    this.clientCollection$ = this.clientService.collection;
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

  public changeState(item: Client, event) {
    this.clientService.changeState(item)
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

  public addClient() {
    console.log("ajout d'un client");
  }

  public deleteClient(item: Client) {
    this.clientService.deleteItem(item)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res) => {
          this.clientService.refresh$.next(true);
        }
      );
  }

  public gotoEdit(item: Client) {
    this.router.navigate(['orders', 'edit', item.id]);
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }
}
