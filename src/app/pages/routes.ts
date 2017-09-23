import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

export const appRoutes: Routes = [
  { 
    path: 'cart',
    component: CartComponent
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];
