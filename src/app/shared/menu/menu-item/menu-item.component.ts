import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./styles/menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;
  @Output() clicked: EventEmitter<any> = new EventEmitter;
  private classes: String = 'menu__menu_link';
  private route = [];

  public emitClick() {
    this.clicked.emit(this.item);
  }

  ngOnInit() {
    this.classes += this.item.modifier ? `--${this.item.modifier}` : '';
    if (this.item.modifier !== 'inactive') {
      this.route.push(this.item.route);
    }
  }
}
