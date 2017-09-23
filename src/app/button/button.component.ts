import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() label: string;
  @Output() clicked = new EventEmitter();

  public emitClick() {
    this.clicked.emit();
  }
}
