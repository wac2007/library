import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { ButtonComponent } from '../../button/button.component';
import { Product } from '../shared/product';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductCardComponent,
        ButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = new Product(1, 'New Book', 'http://via.placeholder.com/350x150', 10, 'Lorem Ipsum');
    fixture.detectChanges();
  });

  describe('should render rightly', () => {
    it('should have the right title', () => {
      const element = fixture.nativeElement.querySelector('h3');
      expect(element.innerHTML.trim()).toBe('New Book');
    });

    it('should have the right text description', () => {
      const element = fixture.nativeElement.querySelector('p');
      expect(element.innerHTML.trim()).toBe('Lorem Ipsum');
    });

    it('should load the image', () => {
      const element = fixture.nativeElement.querySelector('img');
      expect(element.src).toBe('http://via.placeholder.com/350x150');
    });

    it('should have a button', () => {
      const element = fixture.nativeElement.querySelector('button');
      expect(element).toBeTruthy();
    });

    it('should have the price', () => {
      const element = fixture.nativeElement.querySelector('.price');
      expect(element.innerHTML.trim()).toBe('R$ 10.00');
    });
  });

  it('should call function on clicked one time', () => {
    spyOn(fixture.componentInstance, 'select').and.callThrough();
    fixture.debugElement.nativeElement.querySelector('button').click();

    expect(fixture.componentInstance.select).toHaveBeenCalledTimes(1);
  });
});
