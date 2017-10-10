import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuComponent } from '../menu.component';
import { appRoutes } from './mock-routes';
const { MENU_BUTTONS, MENU_BUTTON_SELECTOR } = require('./config');

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let menuItems: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(appRoutes),
      ],
      declarations: [
        MenuComponent,
        MenuItemComponent,
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
