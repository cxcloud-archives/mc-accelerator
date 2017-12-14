import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Order } from '@cxcloud/ct-types/orders';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('/orders');
  }

  getOrder(id: string): Observable<Order> {
    return this.http.get<Order>(`/orders/${id}`);
  }
}
