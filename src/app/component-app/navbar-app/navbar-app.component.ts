import { Component } from '@angular/core';
import { OrdersAppComponent } from '../orders-app/orders-app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-navbar-app',
  standalone: true,
  imports: [OrdersAppComponent, CommonModule, RouterModule, AppComponent],
  templateUrl: './navbar-app.component.html',
  styleUrls: ['./navbar-app.component.css']
})
export class NavbarAppComponent {

}
