import { Component, input, OnInit } from '@angular/core';
import { Order } from '../../models/oreders.model';
import { OrdersService } from '../orders.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders-app.component.html',
  styleUrls: ['./orders-app.component.css']
})
export class OrdersAppComponent implements OnInit {

  orders: Order[] = [];
  filterOrders: Order[] = [];
  isLoading = true;

  constructor(private orderService: OrdersService) {
  }

  ngOnInit(): void {
    this.getOrders();
    this.loadOrders();
  }

  getOrders(): void {
    this.orderService.getOrder().subscribe({
      next: (res) => {
        this.orders = res.data;
        this.filterOrders = res.data;
      },
      error: (error) => {
        console.error('Error fetching orders and products:', error);
      }
    });
  }

  searchData($event: any):void {
    const input = $event.target as HTMLInputElement;
    const searchText = input.value.toLowerCase();

    this.filterOrders = this.orders.filter((orderData) => {
      const orderId = orderData.OrderID ? orderData.OrderID.toString() : '';
      const ProductID = orderData.ProductID ? orderData.ProductID.toString() : '';
      const UnitPrice = orderData.UnitPrice ? orderData.UnitPrice.toString() : '';
      const Quantity = orderData.Quantity ? orderData.Quantity.toString() : '';
      return orderId.includes(searchText) || ProductID.includes(searchText) || UnitPrice.includes(searchText) || Quantity.includes(searchText);
    });
    
  }

  loadOrders() {
    this.orderService.getOrder().subscribe({
      next: (response) => {
        this.orders = response.data; 
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading orders:', error);
        this.isLoading = false;
      }
    });
  }
  
}
