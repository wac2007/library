import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { MenuItemComponent } from '../menu-item.component';
import { appRoutes } from './mock-routes';
const { MENU_ITEM } = require('./config');

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;
  let label: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(appRoutes),
      ],
      declarations: [
        MenuItemComponent
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
    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    component.item = MENU_ITEM;
    fixture.detectChanges();
    label = fixture.debugElement.nativeElement.querySelector('label');
  });

  it('should render the button text', () => {
    expect(label.innerHTML.trim()).toBe(MENU_ITEM.text);
  });
});
