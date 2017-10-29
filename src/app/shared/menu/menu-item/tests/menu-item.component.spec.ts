import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { appRoutes } from './mock-routes';
import { MenuItemComponent } from '../menu-item.component';
import { SharedModule } from '../../../shared.module';

import options from './menu-item.config';

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(appRoutes),
        SharedModule,
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: options.BASE_ROUTE
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    component.item = options.MENU_ITEM;
    fixture.detectChanges();
  });

  it('should render the button text', () => {
    const label = fixture.nativeElement.querySelector(options.MENU_LINK_SELECTOR);
    expect(label.innerHTML.trim()).toMatch(options.MENU_REGEX);
  });

  it('should render the icon', () => {
    const icon = fixture.nativeElement.querySelector(options.ICON_SELECTOR);
    expect(icon.classList.contains(options.ICON_MATCH)).toBeTruthy();
  });

  it('should have trigger delete on button click', () => {
    spyOn(fixture.componentInstance, 'emitClick');
    const link = fixture.nativeElement.querySelector(options.LINK_CLICK_SELECTOR);
    link.click();
    expect(fixture.componentInstance.emitClick).toHaveBeenCalledTimes(1);
  });
});
