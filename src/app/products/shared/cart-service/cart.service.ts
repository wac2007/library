import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';


import { Cart } from './cart';
import { CartItem } from './cart-item';
import { Product } from '../product';

@Injectable()
export class CartService {
  private cart: Cart = new Cart();
  constructor(
    private localStg: LocalStorageService
  ) {
    this.loadLocalStorage();
  }

  getItems(): Object {
    return this.cart.items;
  }

  getIterableItems(): Array<CartItem> {
    return Object.keys(this.cart.items).map((key) => this.cart.items[key]);
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
    this.updateLocalStorage();
  }

  getItemInCart(id: number) {
    return this.cart.items[id] || null;
  }

  getDistinctCount(): number {
    return this.cart.count;
  }

  getCountTotal(): number {
    return this.getIterableItems().reduce((previous, item) =>
      previous + item.quant
    , 0);
  }

  getPriceTotal(): number {
    return this.getIterableItems().reduce((previous, item) =>
      previous + (item.product.price * item.quant)
    , 0);
  }

  updateItem(item: CartItem) {
    this.cart.items[item.product.id] = item;
    this.updateLocalStorage();
  }

  removeItem(itemId: number) {
    delete this.cart.items[itemId];
    this.cart.count--;
    this.updateLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.localStg.clear();
  }

  private loadLocalStorage() {
    const _cart = this.localStg.retrieve('app-cart');
    if (!_cart) { return false; }
    Object.keys(_cart.items).map((key) => {
      const item = _cart.items[key];
      _cart.items[key] = new CartItem(item.product, item.quant);
    });
    this.cart = _cart;
  }

  private updateLocalStorage() {
    this.localStg.store('app-cart', this.cart);
  }
}
