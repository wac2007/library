import { Component, OnInit } from '@angular/core';

import { CartItem } from '../shared/cart-service/cart-item';
import { CartService } from '../shared/cart-service/cart.service';


@Component({
  selector: 'app-cart-grid',
  templateUrl: './cart-grid.component.html',
  styleUrls: ['./cart-grid.component.css']
})
export class CartGridComponent implements OnInit {
  public cartItems: Array<CartItem> = [];

  constructor(
    public cartService: CartService,
  ) { 
  }

  ngOnInit() {
    this.getCartItems();
  }
  
  getCartItems() {
    this.cartItems = this.cartService.getIterableItems();
  }

  getCountTotal() {
    return this.cartService.getCountTotal();
  }

  getPriceTotal() {
    return this.cartService.getPriceTotal();
  }

  deleteItem(cartItem: CartItem) {
    this.cartService.removeItem(cartItem.product.id);
    this.getCartItems();
  }

}
