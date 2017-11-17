import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';
import { CartComponent } from './cart/cart.component';
import { HeaderModule } from './shared/header/header.module';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from '../products/products.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  id: module.id,
  imports: [
    CommonModule,
    HeaderModule,
    ProductsModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    CartComponent,
    HomeComponent,
  ],
  exports: [
    CartComponent,
    HeaderModule,
    HomeComponent,
  ]
})
export class PagesModule { }
