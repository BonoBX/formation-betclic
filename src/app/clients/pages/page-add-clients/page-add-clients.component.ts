import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-clients',
  templateUrl: './page-add-clients.component.html',
  styleUrls: ['./page-add-clients.component.scss']
})
export class PageAddClientsComponent implements OnInit {

  constructor(
    private clientService: ClientsService,
    private router: Router,
    private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public add(item: Client) {
    this.clientService.addItem(item).subscribe(
      (res) => {
        this.router.navigate(['../', {relativeTo: this.currentRoute}]);
      }
    );
  }
}
