import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customers.model';
import { OrdersService } from '../orders.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OrderHistoryAppComponent } from '../order-history-app/order-history-app.component';

@Component({
  selector: 'app-customers-app',
  standalone: true,
  imports: [CommonModule, MatDialogModule,MatButtonModule],
  templateUrl: './customers-app.component.html',
  styleUrl: './customers-app.component.css'
})
export class CustomersAppComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private orderService: OrdersService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.orderService.getCustomers().subscribe({
      next: (res) => {
        this.customers = res.data;
      },
      error: (error) => {
        console.error('Error fetching orders and products:', error);
      }
    });
  }

  openDialog(customerID: string): void {
    const dialogRef = this.dialog.open(OrderHistoryAppComponent, {
      data: { customerID },
      width: '500px',
      maxWidth: '800px',
      maxHeight: '80vh',
      autoFocus: false,
      panelClass: 'custom-dialog',
    });
    console.log("Opening Dialog with CustomerID:", customerID);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('User confirmed');
      } else {
        console.log('Dialog was closed');
      }
    });
  }


}
