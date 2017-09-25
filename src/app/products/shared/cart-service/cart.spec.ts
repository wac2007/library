import { Cart } from './cart';
import { CartItem } from './cart-item';
import { CartService } from './cart.service';
import { Product } from '../product';


describe('CartService', () => {
  let cart;
  let cartService;

  beforeEach(() => {
    const product = new Product(1, 'TestProduct', 'http://via.placeholder.com/150x150', 10, 'Lorem Ipsum');
    const items = [
      new CartItem(product, 1)
    ];
    this.cart = new Cart('1234567890', items, 1, 10);
    this.cartService = new CartService(this.cart);
  });

  it('should instantiate a cartService', () => {
    expect(this.cartService).toBeTruthy();
  });

  it('should instantiate with passed cart', () => {
    expect(this.cartService.getItems().length).toBe(1);
  });

  it('should update the cart', () => {
    const product2 = new Product(2, 'TestProduct2', 'http://via.placeholder.com/150x150', 20, 'Lorem Ipsum Dolumn');
    this.cartService.setItem(product2, 1);
    expect(this.cartService.getItems().length).toBe(2);
    expect(this.cartService.getTotal()).toBe(30);
    expect(this.cartService.getCount()).toBe(this.cartService.getItems().length);
  });
  
});