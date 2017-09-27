import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2Webstorage } from 'ngx-webstorage';
import { NgModule } from '@angular/core';

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
    FormsModule,
    Ng2Webstorage,
    SharedModule,
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
    SharedModule,
    Ng2Webstorage
  ]
})
export class ProductsModule { }
