import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./styles/menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() item: MenuItem;
  @Input() inactive: Boolean = false;

  @Output() clicked: EventEmitter<any> = new EventEmitter;
  public classes: String = 'menu__menu_link';
  private route = [];

  public emitClick() {
    this.clicked.emit(this.item);
  }
}
