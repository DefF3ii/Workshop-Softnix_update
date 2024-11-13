import { Routes } from '@angular/router';
import { OrdersAppComponent } from './component-app/orders-app/orders-app.component';
import { CustomersAppComponent } from './component-app/customers-app/customers-app.component';
import { DashboardAppComponent } from './component-app/dashboard-app/dashboard-app.component';
import { AppComponent } from './app.component';
import { NavbarAppComponent } from './component-app/navbar-app/navbar-app.component';
import { MonthlySalesComponent } from './component-app/monthly-sales/monthly-sales.component';
import { YearlySalesComponent } from './component-app/yearly-sales/yearly-sales.component';

export const routes: Routes = [
    { path: 'orders', component: OrdersAppComponent },
    { path: 'customer', component: CustomersAppComponent },
    { path: 'dailySales', component: DashboardAppComponent },
    { path: 'monthlySales', component: MonthlySalesComponent },
    { path: 'yearlySales', component: YearlySalesComponent },
];
