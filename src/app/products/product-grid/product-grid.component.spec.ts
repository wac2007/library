import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridComponent } from './product-grid.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { ProductService } from './services/product.service';


describe('ProductGridComponent', () => {
  let component: ProductGridComponent;
  let fixture: ComponentFixture<ProductGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ProductGridComponent,
        ProductCardComponent,
        ButtonComponent,
      ],
      providers: [
        ProductService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have 2 cards', () => {
    const elements = fixture.debugElement.nativeElement.querySelectorAll('.product-card').length;
    expect(elements).toBe(2);
  });

  it('should call grid function addToCart once', () => {
    spyOn(fixture.componentInstance, 'addToCart').and.callThrough();

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(fixture.componentInstance.addToCart).toHaveBeenCalledTimes(1);
  });
});
