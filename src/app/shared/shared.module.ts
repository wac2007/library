import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertService } from './alert/alert.service';
import { ButtonComponent } from './button/button.component';
import { PricePipe } from './price/price.pipe';
import { IconComponent } from './icon/icon.component';

@NgModule({
  id: module.id,
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    IconComponent,
    PricePipe,
  ],
  providers: [
    AlertService
  ],
  exports: [
    CommonModule,
    ButtonComponent,
    IconComponent,
    PricePipe
  ]
})
export class SharedModule { }
