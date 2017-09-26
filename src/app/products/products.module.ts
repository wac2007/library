import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartGridComponent } from './cart-grid/cart-grid.component';
import { CartRowComponent } from './cart-row/cart-row.component';
import { CartService } from './shared/cart-service/cart.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductService } from './shared/product-service/product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  id: module.id,
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CartGridComponent,
    CartRowComponent,
    ProductCardComponent,
    ProductGridComponent
  ],
  entryComponents: [
    ProductCardComponent,
    ProductGridComponent
  ],
  providers: [
    CartService,
    ProductService
  ],
  exports: [
    CartGridComponent,
    ProductCardComponent,
    ProductGridComponent,
    SharedModule
  ]
})
export class ProductsModule { }
