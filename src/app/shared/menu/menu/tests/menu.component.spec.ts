import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { appRoutes } from './mock-routes';
import { MenuItemComponent } from '../../menu-item/menu-item.component';
import { MenuComponent } from '../menu.component';
import { SharedModule } from '../../../shared.module';

import { MENU_BUTTONS, MENU_BUTTON_SELECTOR } from './menu.test-config';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let menuItems: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(appRoutes),
        SharedModule
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    component.menuItems = MENU_BUTTONS;
    fixture.detectChanges();
    menuItems = fixture.debugElement.nativeElement.querySelectorAll(MENU_BUTTON_SELECTOR);
  });

  it('should create menu items', () => {
    expect(menuItems.length).toBe(MENU_BUTTONS.length);
  });
});
