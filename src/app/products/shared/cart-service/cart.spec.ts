import { LocalStorageService } from 'ngx-webstorage';

import { Cart } from './cart';
import { CartItem } from './cart-item';
import { CartService } from './cart.service';
import { Product } from '../product';

describe('CartService', () => {
  let cart, cartService;

  beforeEach(() => {
    cartService = new CartService(new LocalStorageService());
    cartService.clearCart();
  });

  it('should include item in cart', () => {
    const product = new Product(1, 'TestProduct', 'http://via.placeholder.com/150x150', 20, 'Lorem Ipsum Dolumn');
    cartService.setItem(product, 1);
    const countItems = Object.keys(cartService.getItems()).length;
    expect(countItems).toBe(1);
    expect(cartService.getPriceTotal()).toBe(20);
    expect(cartService.getDistinctCount()).toBe(countItems);
  });

  it('should bring item in cart', () => {
    const product = new Product(1, 'TestProduct', 'http://via.placeholder.com/150x150', 20, 'Lorem Ipsum Dolumn');
    cartService.setItem(product, 1);
    let _item = cartService.getItemInCart(1);
    expect(_item.product).toBe(product);
  });

  it('should update quant of item in cart', () => {
    const product = new Product(1, 'TestProduct', 'http://via.placeholder.com/150x150', 20, 'Lorem Ipsum Dolumn');
    cartService.setItem(product, 1);
    cartService.setItem(product, 2);
    cartService.setItem(product, 4);
    const countItems = Object.keys(cartService.getItems()).length;
    expect(countItems).toBe(1);
    let _item = cartService.getItemInCart(1);
    expect(_item.quant).toBe(7);
  });
  
  it('should bring the full count of items', () => {
    const product = new Product(1, 'TestProduct', 'http://via.placeholder.com/150x150', 20, 'Lorem Ipsum Dolumn');
    const product2 = new Product(2, 'TestProduct2', 'http://via.placeholder.com/150x150', 40, 'Lorem Ipsum Dolumn');
    cartService.setItem(product, 8);
    cartService.setItem(product2, 12);

    expect(cartService.getCountTotal()).toBe(20);
  });

  it('should bring the sum price of all items', () => {
    const product = new Product(1, 'TestProduct', 'http://via.placeholder.com/150x150', 10, 'Lorem Ipsum Dolumn');
    const product2 = new Product(2, 'TestProduct2', 'http://via.placeholder.com/150x150', 30, 'Lorem Ipsum Dolumn');
    cartService.setItem(product, 1);
    cartService.setItem(product2, 3);

    expect(cartService.getPriceTotal()).toBe(100);
  });

  it('should remove a selected item', () => {
    const product = new Product(1, 'TestProduct', 'http://via.placeholder.com/150x150', 10, 'Lorem Ipsum Dolumn');
    const product2 = new Product(2, 'TestProduct2', 'http://via.placeholder.com/150x150', 30, 'Lorem Ipsum Dolumn');
    cartService.setItem(product, 1);
    cartService.setItem(product2, 3);
    cartService.removeItem('2');
    expect(cartService.getDistinctCount()).toBe(1);
  });

  it('should update product quantity in cart', () => {
    const product = new Product(1, 'TestProduct', 'http://via.placeholder.com/150x150', 10, 'Lorem Ipsum Dolumn');
    const product2 = new Product(2, 'TestProduct2', 'http://via.placeholder.com/150x150', 30, 'Lorem Ipsum Dolumn');
    cartService.setItem(product, 1);
    cartService.setItem(product2, 3);
    const cartUpdate = new CartItem(product, 5);
    cartService.updateItem(cartUpdate);
    expect(cartService.getCountTotal()).toBe(8);
  })
});