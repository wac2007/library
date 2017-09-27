import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertService } from './alert/alert.service';
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
  providers: [
    AlertService
  ],
  exports: [
    CommonModule,
    ButtonComponent,
    PricePipe
  ]
})
export class SharedModule { }
