import { Component, Input} from '@angular/core';

import { CartService } from '../../../products/shared/cart-service/cart.service';
import { MenuItem } from '../../../shared/menu/menu-item/menu-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./styles/header.component.scss']
})
export class HeaderComponent {
  @Input() title: String;
  private menuItems: Array<MenuItem> = [
    new MenuItem('Home', '/', 'home', 'active'),
    new MenuItem('Carrinho', '/cart', 'shopping-cart'),
    new MenuItem('Contato', '/contact', 'phone', 'inactive'),
    new MenuItem('Sobre', '/about', 'info-circle', 'inactive'),
  ];
}
