import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.clientService.collection.subscribe(
      (data) => {
        this.clientCollection = data;
      }
    )
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

  // public changeState(item: Client, event) {
  //   this.clientService.changeState(item, event.target.value).subscribe(
  //     (result) => {
  //       item.state = result.state;
  //     },
  //     (error) => {
  //       event.target.value = item.state;
  //     }
  //   )
  // }

  public addClient() {
    console.log("ajout d'un client");
  }

  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }
}
