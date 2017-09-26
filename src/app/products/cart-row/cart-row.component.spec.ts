import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartRowComponent } from './cart-row.component';
import { ProductsModule } from '../products.module';
import { Product } from '../shared/product';
import { CartItem } from '../shared/cart-service/cart-item';

describe('CartRowComponent', () => {
  let component: CartRowComponent;
  let fixture: ComponentFixture<CartRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartRowComponent);
    component = fixture.componentInstance;
    const product = new Product(1, 'New Book', 'http://via.placeholder.com/350x150', 10, 'Lorem Ipsum');
    component.cartItem = new CartItem(product, 2);
    fixture.detectChanges();
  });

  it('should display the name of product', () => {
    const element = fixture.nativeElement.querySelector('.item-title');
    expect(element.innerHTML.trim()).toBe('New Book');
  });

  it('should display the price of product', () => {
    const element = fixture.nativeElement.querySelector('.item-price');
    expect(element.innerHTML.trim()).toBe('R$10,00');
  });

  it('should display the quantity of product', () => {
    const element = fixture.nativeElement.querySelector('.item-quant');
    expect(parseInt(element.innerHTML.trim())).toBe(2);
  });

  it('should display the subtotal of product', () => {
    const element = fixture.nativeElement.querySelector('.item-subtotal');
    expect(element.innerHTML.trim()).toBe('R$20,00');
  });

  it('should display the remove product button', () => {
    const element = fixture.nativeElement.querySelector('button');
    expect(element).toBeTruthy();
  });
});
