import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { appRoutes } from './mock-routes';
import { MenuItemComponent } from '../menu-item.component';
import { SharedModule } from '../../../shared.module';
const {
  MENU_ITEM, MENU_LINK_SELECTOR, ICON_SELECTOR, ICON_MATCH, EMITTER_FUNCTION, LINK_CLICK_SELECTOR,
  BASE_ROUTE
} = require('./menu-item.config');

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
          useValue: BASE_ROUTE
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
  });

  it('should render the button text', () => {
    const label = fixture.debugElement.nativeElement.querySelector(MENU_LINK_SELECTOR);
    expect(label.innerHTML.trim()).toMatch(MENU_ITEM.text);
  });

  it('should render the icon', () => {
    const icon = fixture.debugElement.nativeElement.querySelector(ICON_SELECTOR);
    expect(icon.classList.contains(ICON_MATCH)).toBeTruthy();
  });

  it('should have trigger delete on button click', () => {
    spyOn(fixture.componentInstance, EMITTER_FUNCTION);
    const link = fixture.debugElement.nativeElement.querySelector(LINK_CLICK_SELECTOR);
    link.click();
    expect(fixture.componentInstance.emitClick).toHaveBeenCalledTimes(1);
  });
});
