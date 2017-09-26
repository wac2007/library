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
    this.cart.total += product.price;
    this.updateLocalStorage();
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
  
  clearCart() {
    this.cart = new Cart();
    this.localStg.clear();
  }

  private loadLocalStorage() {
    let _cart = this.localStg.retrieve('app-cart');
    if (!_cart) return false;
    Object.keys(_cart.items).map((key) => {
      let item = _cart.items[key];
      _cart.items[key] = new CartItem(item.product, item.quant);
    });
    this.cart = _cart;
  }

  private updateLocalStorage() {
    this.localStg.store('app-cart', this.cart);
  }

}