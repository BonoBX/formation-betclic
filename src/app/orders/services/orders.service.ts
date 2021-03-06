import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin, Observable, Subject } from 'rxjs';
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
              this.pCollection.complete();  // Nécessaire au forkJoin et au combineLatest
            }
          );
        }
      }
    )
  }

  get collection(): Observable<Order[]> {
    return this.pCollection.asObservable();
  }

  public serializeOrder(collectionOrders: Order[]) : Order[] {
    return collectionOrders.map(
      (item) => {
        return new Order(item);
      }
    );
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order({...item});
    obj.state = state;
    return this.updateItem(obj);
  }

  public changeClient(item: Order, name: string) {
    const obj = new Order({...item});
    obj.client = name;
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

  public getItemByClientName(name: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.urlApi}orders?client=${name}`).pipe(
      map((collection) => this.serializeOrder(collection))
    );
  }

  public getItem2ByClientName(name: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.urlApi}orders2?client=${name}`).pipe(
      map((collection) => this.serializeOrder(collection))
    )
  }

  public getAllItemByClientName(name: string): Observable<Order[]> {
    //return combineLatest([this.getItemByClientName(name), this.getItem2ByClientName(name)]).pipe(
    return forkJoin([this.getItemByClientName(name), this.getItem2ByClientName(name)]).pipe(
      map(([resultItem, resultItem2]) => {
        return resultItem.concat(resultItem2);
      })
    );
  }
}
