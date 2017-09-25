import { Cart } from './cart';
import { CartItem } from './cart-item';
import { Product } from '../product';

export class CartService {
  private cart;

  constructor(cart?: Cart) {
    this.cart = cart ? cart : new Cart();
  }

  getItems() {
    return this.cart.items;
  }

  //todo: update quantity only if is the same product
  setItem(product: Product, quant: Number) {
    this.cart.items.push(new CartItem(product, quant));
    this.cart.count += 1;
    this.cart.total += product.price;
  }

  getTotal() {
    return this.cart.total;
  }

  getCount() {
    return this.cart.count;
  }
}