import { Component, EventEmitter, Input } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./styles/menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() item: MenuItem;
  @Input() inactive: Boolean = false;

}
