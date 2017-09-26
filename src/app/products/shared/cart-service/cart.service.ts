import { Injectable } from '@angular/core';

import { Cart } from './cart';
import { CartItem } from './cart-item';
import { Product } from '../product';

@Injectable()
export class CartService {
  private cart: Cart = new Cart();

  getItems(): Object {
    return this.cart.items;
  }

  setItem(product: Product, quant: number): void {
    let cartItem: CartItem = this.getItemInCart(product.id);
    if (cartItem) {
      cartItem.quant += quant;
    } else {
      cartItem = new CartItem(product, quant);
      this.cart.count++;
    }
    this.cart.items[product.id] = cartItem;
    this.cart.total += product.price;
  }

  getItemInCart(id: number) {
    return this.cart.items[id] || null;
  }

  getTotal(): Number {
    return this.cart.total;
  }

  getCount(): Number {
    return this.cart.count;
  }
}