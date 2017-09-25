import { Injectable } from '@angular/core';

import { Cart } from './cart';
import { CartItem } from './cart-item';
import { Product } from '../product';

@Injectable()
export class CartService {
  private cart: Cart = new Cart();

  getItems(): CartItem[] {
    return this.cart.items;
  }

  //todo: update quantity only if is the same product
  setItem(product: Product, quant: number): void {
    this.cart.items.push(new CartItem(product, quant));
    this.cart.count++;
    this.cart.total += product.price;
  }

  getTotal(): Number {
    return this.cart.total;
  }

  getCount(): Number {
    return this.cart.count;
  }
}