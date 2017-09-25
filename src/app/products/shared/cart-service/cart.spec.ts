import { Cart } from './cart';
import { CartItem } from './cart-item';
import { CartService } from './cart.service';
import { Product } from '../product';


describe('CartService', () => {
  let cart;
  let cartService;

  beforeEach(() => {
    this.cartService = new CartService();
  });

  it('should update the cart', () => {
    const product = new Product(1, 'TestProduct', 'http://via.placeholder.com/150x150', 20, 'Lorem Ipsum Dolumn');
    this.cartService.setItem(product, 1);
    expect(this.cartService.getItems().length).toBe(1);
    expect(this.cartService.getTotal()).toBe(20);
    expect(this.cartService.getCount()).toBe(this.cartService.getItems().length);
  });
});