import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from '../products/products.module';
import { appRoutes } from './routes';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  id: module.id,
  imports: [
    CommonModule,
    ProductsModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    CartComponent,
    HomeComponent,
    HeaderComponent
  ]
})
export class PagesModule { }
