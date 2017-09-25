import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './shared/cart-service/cart.service';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductGridComponent } from './product-grid/product-grid.component';

@NgModule({
  id: module.id,
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
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
    ProductGridComponent
  ]
})
export class ProductsModule { }
