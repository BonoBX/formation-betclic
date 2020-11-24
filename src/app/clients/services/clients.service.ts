import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/shared/models/client.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection: BehaviorSubject<Client[]> = new BehaviorSubject([]);
  private urlApi = environment.urlApi;
  public refresh$: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) {
    this.refresh$.subscribe(
      (refreshing) => {
        if (refreshing == true) {
          this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
            map((collection) => {
              return collection.map((obj) => {
                return new Client(obj)
              })
            })
          ).subscribe(
            (data) => {
              this.pCollection.next(data);
            }
          );
        }
      }
    )
  }

  get collection(): Observable<Client[]> {
    return this.pCollection.asObservable();
  }

  public changeState(item: Client): Observable<Client> {
    const obj = new Client({...item});
    return this.updateItem(obj);
  }

  public updateItem(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}clients/${item.id}`, item);
  }

  public addItem(item:Client): Observable<Client> {
    return this.http.post<Client>(`${this.urlApi}clients`, item);
  }

  public deleteItem(item: Client): Observable<Client> {
    return this.http.delete<Client>(`${this.urlApi}clients/${item.id}`);
  }

  public getItemById(id: string): Observable<Client> {
    return this.http.get<Client>(`${this.urlApi}clients/${id}`);
  }
}
