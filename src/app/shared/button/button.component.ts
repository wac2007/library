import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() label: String;
  @Input() classes: String = '';
  @Input() icon: String;
  @Output() clicked = new EventEmitter();

  private class;

  public emitClick() {
    this.clicked.emit();
  }

  ngOnInit() {
    this.class = `button ${this.classes}`;
    if (this.icon) {
      this.class = `${this.class} fa fa-${this.icon}`;
    }
  }
}
