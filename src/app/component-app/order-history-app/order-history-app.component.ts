import { Component, Inject, OnInit } from '@angular/core';
import { Order } from '../../models/oreders.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrdersService } from '../orders.service';
import { CommonModule } from '@angular/common';
import { Customer } from '../../models/customers.model';

@Component({
  selector: 'app-order-history-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history-app.component.html',
  styleUrl: './order-history-app.component.css',
})
export class OrderHistoryAppComponent implements OnInit {
  // Customer: Customer[] = [];
  orders: Order[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { customerID: string },
    private orderService: OrdersService,
    private dialogRef: MatDialogRef<OrderHistoryAppComponent>
  ) {
    console.log('Received Data:', this.data);
  }

  ngOnInit(): void {
    this.getOrderHistory();
  }

  getOrderHistory(): void {
    this.orderService
      .getOrderById(this.data && this.data.customerID)
      .subscribe({
        next: (response) => {
          if (Array.isArray(response.data)) {
            this.orders = response.data.filter(
              (order) => order.CustomerID === this.data.customerID
            );

            this.orders.sort((a, b) => {
              const dateFst = new Date(a.OrderDate);
              const dateSec = new Date(b.OrderDate);
              return dateSec.getTime() - dateFst.getTime();
            });
          } else {
            console.warn('Response data is not an array');
          }
        },

        error: (error) => {
          console.error('Error fetching orders:', error);
        },
      });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
