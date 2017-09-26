import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRowComponent } from './cart-row/cart-row.component';
import { CartService } from './shared/cart-service/cart.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  id: module.id,
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CartRowComponent,
    ProductCardComponent,
    ProductGridComponent,
  ],
  entryComponents: [
    ProductCardComponent,
    ProductGridComponent
  ],
  providers: [
    CartService
  ],
  exports: [
    ProductCardComponent,
    ProductGridComponent,
    SharedModule
  ]
})
export class ProductsModule { }
