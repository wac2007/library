import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalStorageService } from 'ngx-webstorage';


import { CartGridComponent } from './cart-grid.component';
import { CartService } from '../shared/cart-service/cart.service';
import { CartItem } from '../shared/cart-service/cart-item';
import { Product } from '../shared/product';
import { ProductsModule } from '../products.module';

describe('CartGridComponent', () => {
  let component: CartGridComponent;
  let fixture: ComponentFixture<CartGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductsModule
      ],
      providers: [
        CartService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartGridComponent);
    component = fixture.componentInstance;
    fixture.componentInstance.cartService.clearCart();
    fixture.detectChanges();
  });

  it('should have app-cart-row element', () => {
    const product = new Product(1, 'Book ABC', '', 10, 'Lorem Ipsum');
    const cartItem = new CartItem(product, 1);
    fixture.componentInstance.cartItems = [cartItem];
    fixture.detectChanges();

    const element = fixture.debugElement.nativeElement.querySelector('app-cart-row');
    expect(element).toBeTruthy();
  });

  it('should have count total', () => {
    const product = new Product(1, 'Book ABC', '', 10, 'Lorem Ipsum');
    const product2 = new Product(2, 'Book XYZ', '', 20, 'Lorem Ipsum');
    fixture.componentInstance.cartService.setItem(product, 1);
    fixture.componentInstance.cartService.setItem(product2, 2);
    fixture.componentInstance.getCartItems();
    fixture.detectChanges();

    const element = fixture.debugElement.nativeElement.querySelector('.count-total');
    expect(parseInt(element.innerHTML.trim())).toBe(3);
  });
  
  it('should have price total', () => {
    const product = new Product(1, 'Book ABC', '', 10, 'Lorem Ipsum');
    const product2 = new Product(2, 'Book XYZ', '', 20, 'Lorem Ipsum');
    fixture.componentInstance.cartService.setItem(product, 1);
    fixture.componentInstance.cartService.setItem(product2, 2);
    fixture.componentInstance.getCartItems();
    fixture.detectChanges();

    const element = fixture.debugElement.nativeElement.querySelector('.price-total');
    expect(element.innerHTML.trim()).toBe('R$50,00');
  });
});
