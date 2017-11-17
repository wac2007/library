import { Component } from '@angular/core';

import { CartService } from '../../../../products/shared/cart-service/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./styles/cart-button.component.scss']
})
export class CartButtonComponent {

  constructor(
    public cartService: CartService
  ) {
  }

  getCount() {
    return this.cartService.getDistinctCount();
  }

}
