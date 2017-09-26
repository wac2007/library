import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { appRoutes } from '../../routes';
import { CartComponent } from '../../../pages/cart/cart.component';
import { CartService } from '../../../products/shared/cart-service/cart.service';
import { HeaderComponent } from './header.component';
import { HomeComponent } from '../../../pages/home/home.component';
import { ProductCardComponent } from '../../../products/product-card/product-card.component';
import { ProductGridComponent } from '../../../products/product-grid/product-grid.component';
import { SharedModule } from '../../../shared/shared.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HeaderComponent,
        CartComponent,
        HomeComponent,
        ProductGridComponent,
        ProductCardComponent
      ],
      imports: [
        RouterModule.forRoot(appRoutes),
        SharedModule
      ],
      providers: [
        CartService,
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the right title', () => {
    const title = 'Test Title';
    fixture.componentInstance.title = title;
    fixture.detectChanges();

    const element = fixture.debugElement.nativeElement.querySelector('h1');
    expect(element.innerHTML.trim()).toBe(title);
  });

  it('should have cart button', () => {
    const element = fixture.debugElement.nativeElement.querySelector('.cart-button');
    expect(element).toBeTruthy();
  })
});
