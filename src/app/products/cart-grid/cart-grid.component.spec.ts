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
    const product = new Product(1, 'Book ABC', '', 10, 'Lorem Ipsum');
    const product2 = new Product(2, 'Book XYZ', '', 20, 'Lorem Ipsum');
    fixture.componentInstance.cartService.setItem(product, 1);
    fixture.componentInstance.cartService.setItem(product2, 2);
    fixture.componentInstance.getCartItems();
    fixture.detectChanges();
  });

  it('should have app-cart-row element', () => {
    const element = fixture.debugElement.nativeElement.querySelector('app-cart-row');
    expect(element).toBeTruthy();
  });

  it('should have count total', () => {
    const element = fixture.debugElement.nativeElement.querySelector('.count-total');
    expect(parseInt(element.innerHTML.trim())).toBe(3);
  });
  
  it('should have price total', () => {
    const element = fixture.debugElement.nativeElement.querySelector('.price-total');
    expect(element.innerHTML.trim()).toBe('R$50,00');
  });

  it('should have trigger delete on button click', () => {
    spyOn(fixture.componentInstance, 'deleteItem');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(fixture.componentInstance.deleteItem).toHaveBeenCalledTimes(1);
  });

  it('should have update item on quantity change', () => {
    spyOn(fixture.componentInstance, 'updateItem');
    const element = fixture.nativeElement.querySelector('.item-quant input');
    element.dispatchEvent(new Event('change'));
    expect(fixture.componentInstance.updateItem).toHaveBeenCalledTimes(1);
  });
});
