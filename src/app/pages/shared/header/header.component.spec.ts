import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { appRoutes } from '../../routes';
import { CartService } from '../../../products/shared/cart-service/cart.service';
import { HeaderComponent } from './header.component';
import { PagesModule } from '../../pages.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      imports: [
        PagesModule,
        RouterModule.forRoot(appRoutes),
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
  });
});
