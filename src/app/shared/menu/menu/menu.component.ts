import { Component, Input } from '@angular/core';
import { MenuItem, MODIFIER_INACTIVE } from '../menu-item/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./styles/menu.component.scss']
})
export class MenuComponent {
  @Input() menuItems: Array<MenuItem>;

  isInactive(item) {
    return (item.modifier === MODIFIER_INACTIVE);
  }

}
