import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { catchError, from, Observable, throwError } from 'rxjs';
import { Order } from '../models/oreders.model';
import { Customer } from '../models/customers.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }
  
  private url = 'http://demo.softnix.co.th:8010';

  getOrder(): Observable<AxiosResponse<Order[]>> {
    return from(
      axios.get<Order[]>(`${this.url}/orders`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    ).pipe(
      catchError(this.handleError)
    );
  }

  getCustomers(): Observable<AxiosResponse<Customer[]>> {
    return from(
      axios.get<Customer[]>(`${this.url}/customers`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    ).pipe(
      catchError(this.handleError)
    );
  }

  getOrderById(id: string): Observable<AxiosResponse<Order[]>> {
    return from(
      axios.get<Order[]>(`${this.url}/orders?customerID=${id}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    ).pipe(
      catchError(this.handleError)
    );
  }

  getTotalSales(): Observable<AxiosResponse<Order[]>> {
    return from(
      axios.get<Order[]>(`${this.url}/orders`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
      console.error('API error:', error);
      return throwError(() => new Error('An error occurred while fetching data.'));
  }

}
