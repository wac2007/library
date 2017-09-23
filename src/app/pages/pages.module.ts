import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent, 
    CartComponent
  ]
})
export class PagesModule { }
