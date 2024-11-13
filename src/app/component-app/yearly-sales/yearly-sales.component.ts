import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/oreders.model';
import { catchError, map, of } from 'rxjs';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-yearly-sales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './yearly-sales.component.html',
  styleUrl: './yearly-sales.component.css',
})
export class YearlySalesComponent implements OnInit {
  orders: Order[] = [];
  yearlySales: { [year: string]: number } = {};

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.getTotalSalesOfYear();
  }

  getTotalSalesOfYear() {
    this.orderService
      .getTotalSales()
      .pipe(
        map((response) => response.data),
        map((orders) => {
          const yearlySales = orders.reduce((acc, order) => {
            const year = order.OrderDate.substring(0, 4); // ดึงเฉพาะปี
            const totalSale =
              parseFloat(order.UnitPrice) * parseFloat(order.Quantity);

            acc[year] = (acc[year] || 0) + totalSale;
            return acc;
          }, {} as { [year: string]: number });

          return yearlySales;
        }),
        catchError((error) => {
          console.error(
            'An error occurred while retrieving sales data.',
            error
          );
          return of({});
        })
      )
      .subscribe((yearlySales) => {
        this.yearlySales = yearlySales;
        console.log('ยอดขายรายปี:', this.yearlySales);
      });
  }

  getYears(yearlySales: { [year: string]: number }): string[] {
    return Object.keys(yearlySales);
  }
}
