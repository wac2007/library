import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';
import { ButtonComponent } from '../button/button.component';

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
    fixture.detectChanges();
  });

  describe('should render rightly', () => {
    it('should have the right title', () => {
      let textLabel = 'Book Title';

      fixture.componentInstance.title = textLabel;
      fixture.detectChanges();
      
      const element = fixture.nativeElement.querySelector('h3');
      expect(element.innerHTML.trim()).toBe(textLabel);
    });

    it('should have the right text description', () => {
      let textLabel = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

      fixture.componentInstance.description = textLabel;
      fixture.detectChanges();
      
      const element = fixture.nativeElement.querySelector('p');
      expect(element.innerHTML.trim()).toBe(textLabel);
    });

    it('should load the image', () => {
      let imgUrl = 'http://via.placeholder.com/350x150';

      fixture.componentInstance.imageUrl = imgUrl;
      fixture.detectChanges();
      
      const element = fixture.nativeElement.querySelector('img');
      expect(element.src).toBe(imgUrl);
    });

    it('should have a button', () => {
      const element = fixture.nativeElement.querySelector('button');
      expect(element).toBeTruthy();
    });

    it('should have the price', () => {
      fixture.componentInstance.price = 10;
      fixture.detectChanges();
      
      const element = fixture.nativeElement.querySelector('.price');
      expect(element.innerHTML.trim()).toBe('R$ 10.00');
    });
  });

  it('should call function on clicked one time', () => {
    spyOn(fixture.componentInstance, 'select').and.callThrough();
    
    fixture.componentInstance.productId = 1;
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(fixture.componentInstance.select).toHaveBeenCalledTimes(1);
  });
});
