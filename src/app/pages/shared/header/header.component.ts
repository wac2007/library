import { Component, Input} from '@angular/core';

import { CartService } from '../../../products/shared/cart-service/cart.service';
import { MenuItem } from '../../../shared/menu/menu-item/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: String;
  private menuItems: Array<MenuItem> = [
    new MenuItem('Home', '/'),
    new MenuItem('Contato', '/contact'),
    new MenuItem('Sobre', '/about')
  ];

  constructor(
    public cartService: CartService
  ) {
  }

  getCount() {
    return this.cartService.getDistinctCount();
  }
}
