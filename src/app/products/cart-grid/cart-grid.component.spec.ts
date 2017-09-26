import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartGridComponent } from './cart-grid.component';
import { CartService } from '../shared/cart-service/cart.service';
import { CartItem } from '../shared/cart-service/cart-item';
import { Product } from '../shared/product';
import { ProductsModule } from '../products.module';

describe('CartGridComponent', () => {
  let component: CartGridComponent;
  let fixture: ComponentFixture<CartGridComponent>;
  let service;

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
});
