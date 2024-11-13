import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { Order } from '../../models/oreders.model';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-dashboard-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-app.component.html',
  styleUrl: './dashboard-app.component.css',
})
export class DashboardAppComponent implements OnInit {
  orders: Order[] = [];
  dailySales: { [date: string]: number } = {};

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.getTotalSalesOfDay();
  }

  getTotalSalesOfDay() {
    this.orderService
      .getTotalSales()
      .pipe(
        map((response) => response.data),
        map((orders) => {
          const dailySales = orders.reduce((acc, order) => {
            const date = order.OrderDate;
            const totalSale = parseFloat(order.UnitPrice) * parseFloat(order.Quantity);

            acc[date] = (acc[date] || 0) + totalSale;
            return acc;
          }, {} as { [date: string]: number });

          return dailySales;
        }),
        catchError((error) => {
          console.error(
            'An error occurred while retrieving sales data.',
            error
          );
          return of({});
        })
      )
      .subscribe((dailySales) => {
        this.dailySales = dailySales;
      });
  }

  getDates(dailySales: { [date: string]: number }): string[] {
    return Object.keys(dailySales);
  }
}
