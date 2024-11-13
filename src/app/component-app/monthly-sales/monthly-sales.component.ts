import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/oreders.model';
import { OrdersService } from '../orders.service';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-monthly-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monthly-sales.component.html',
  styleUrl: './monthly-sales.component.css',
})
export class MonthlySalesComponent implements OnInit {
  orders: Order[] = [];
  monthlySales: { [month: string]: number } = {};

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.getTotalSalesOfMonth();
  }

  getTotalSalesOfMonth() {
    this.orderService
      .getTotalSales()
      .pipe(
        map((response) => response.data),
        map((orders) => {
          const monthlySales = orders.reduce((acc, order) => {
            const month = order.OrderDate.substring(0, 7);
            const totalSale = parseFloat(order.UnitPrice) * parseFloat(order.Quantity);

            acc[month] = (acc[month] || 0) + totalSale;
            return acc;
          }, {} as { [month: string]: number });

          return monthlySales;
        }),
        catchError((error) => {
          console.error(
            'An error occurred while retrieving sales data.',
            error
          );
          return of({});
        })
      )
      .subscribe((monthlySales) => {
        this.monthlySales = monthlySales;
      });
  }

  getMonths(monthlySales: { [month: string]: number }): string[] {
    return Object.keys(monthlySales);
  }
}
