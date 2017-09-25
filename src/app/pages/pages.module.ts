import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsModule } from '../products/products.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  id: module.id,
  imports: [
    CommonModule,
    ProductsModule,
    SharedModule
  ],
  declarations: [
    HomeComponent, 
    CartComponent,
  ]
})
export class PagesModule { }
