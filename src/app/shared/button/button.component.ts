import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() classes: string = '';
  @Input() icon: string;
  @Output() clicked = new EventEmitter();

  private class = 'button';

  public emitClick() {
    this.clicked.emit();
  }

  ngOnInit() {
    this.class += ` ${this.classes}`;
    if (this.icon) {
      this.class += ` fa fa-${this.icon}`
    }
  }
}
