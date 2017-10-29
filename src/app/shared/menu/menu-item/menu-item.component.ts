import { Component, EventEmitter, Input, OnInit, OnChanges, Output, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./styles/menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent implements OnChanges, OnInit {
  @Input() item: MenuItem;
  @Input() active: Boolean = false;
  @Input() inactive: Boolean = false;

  @Output() clicked: EventEmitter<any> = new EventEmitter;
  public classes: String = 'menu__menu_link';
  private route = [];

  public emitClick() {
    this.clicked.emit(this.item);
  }

  checkClasses() {
    if (this.active) {
      this.classes = 'menu__menu_link--active';
    } else if (this.inactive) {
      this.classes = 'menu__menu_link--inactive';
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.checkClasses();
  }

  ngOnInit() {
    this.checkClasses();
  }
}
