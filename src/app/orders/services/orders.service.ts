import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection: BehaviorSubject<Order[]> = new BehaviorSubject([]);
  private urlApi = environment.urlApi;
  public refresh$: Subject<boolean> = new Subject();

  constructor(private http: HttpClient) {
    this.refresh$.subscribe(
      (refreshing) => {
        if (refreshing == true) {
          this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
            map((collection) => {
              return collection.map((obj) => {
                return new Order(obj)
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

  get collection(): Observable<Order[]> {
    return this.pCollection.asObservable();
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order({...item});
    obj.state = state;
    return this.updateItem(obj);
  }

  public updateItem(item: Order): Observable<Order> {
   return this.http.put<Order>(`${this.urlApi}orders/${item.id}`, item);
  }

  public addItem(item:Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}orders`, item);
  }

  public deleteItem(item: Order): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}orders/${item.id}`);
  }

  public getItemById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}orders/${id}`);
  }
}
