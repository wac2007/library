import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';

@NgModule({
  id: module.id,
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent
  ],
  exports: [
    CommonModule,
    ButtonComponent
  ]
})
export class SharedModule { }
