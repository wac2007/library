import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';

import { HeaderBrandComponent } from './header-brand/header-brand.component';
import { HeaderComponent } from './header.component';
import { CartButtonComponent } from './cart-button/cart-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  declarations: [
    HeaderBrandComponent,
    HeaderComponent,
    CartButtonComponent,
  ],
  exports: [
    HeaderBrandComponent,
    HeaderComponent,
  ]
})
export class HeaderModule { }
