import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { appRoutes } from './mock-routes';
import { CartService } from '../../../../products/shared/cart-service/cart.service';
import { HeaderComponent } from '../header.component';
import { PagesModule } from '../../../pages.module';
import { SharedModule } from '../../../../shared/shared.module';

const {
  TEST_TITLE, CART_BUTTON_SELECTOR, BRAND_SELECTOR, MENU_SELECTOR,
} = require('./header.config');

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PagesModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
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

  it('should have brand component', () => {
    const element = fixture.debugElement.nativeElement.querySelector(BRAND_SELECTOR);
    expect(element).toBeTruthy();
  });

  it('should have cart button', () => {
    const element = fixture.debugElement.nativeElement.querySelector(CART_BUTTON_SELECTOR);
    expect(element).toBeTruthy();
  });

  it('should have navigation menu', () => {
    const element = fixture.debugElement.nativeElement.querySelector(MENU_SELECTOR);
    expect(element).toBeTruthy();
  });
});
