import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection: Observable<Client[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.pCollection = this.http.get<Client[]>(`${this.urlApi}clients`);
  }

  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  // public changeState(item: Client): Observable<Client> {
  //   const obj = new Client({...item});
  //   return this.updateItem(obj);
  // }

  // public updateItem(item: Client): Observable<Client> {
  //   return this.http.put<Client>(`${this.urlApi}clients/${item.id}`, item);
  // }

  public addItem(item:Client): Observable<Client> {
    return this.http.post<Client>(`${this.urlApi}clients`, item);
  }
}
