import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AlertService } from './alert/alert.service';
import { ButtonComponent } from './button/button.component';
import { PricePipe } from './price/price.pipe';
import { IconComponent } from './icon/icon.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';

@NgModule({
  id: module.id,
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ButtonComponent,
    IconComponent,
    PricePipe,
    MenuComponent,
    MenuItemComponent,
  ],
  providers: [
    AlertService
  ],
  exports: [
    CommonModule,
    ButtonComponent,
    IconComponent,
    PricePipe,
    RouterModule,
  ]
})
export class SharedModule { }
