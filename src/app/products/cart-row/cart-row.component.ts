import { Component, Input } from '@angular/core';

import { CartItem } from '../shared/cart-service/cart-item';

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.css']
})
export class CartRowComponent {
  @Input() cartItem: CartItem;

  subtotal() {
    return this.cartItem.getSubTotal();
  }

  constructor() { }

}
