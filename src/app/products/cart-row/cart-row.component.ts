import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CartItem } from '../shared/cart-service/cart-item';

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrls: ['./cart-row.component.css']
})
export class CartRowComponent {
  @Input() cartItem: CartItem;
  @Output() delete = new EventEmitter();

  triggerDelete() {
    this.delete.emit(this.cartItem);
  }
  subtotal() {
    return this.cartItem.getSubTotal();
  }


  constructor() { }

}
