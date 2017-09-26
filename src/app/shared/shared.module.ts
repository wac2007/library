import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { PricePipe } from './price/price.pipe';

@NgModule({
  id: module.id,
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    PricePipe,
  ],
  exports: [
    CommonModule,
    ButtonComponent
  ]
})
export class SharedModule { }
