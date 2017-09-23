import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../button/button.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductGridComponent } from './product-grid/product-grid.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonComponent,
    ProductCardComponent,
    ProductGridComponent
  ],
  declarations: []
})
export class ProductsModule { }
