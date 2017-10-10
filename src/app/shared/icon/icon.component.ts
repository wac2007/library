import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
})
export class IconComponent implements OnInit {
  public class: String;
  @Input() icon: String;
  @Input() size: number = 1;

  ngOnInit() {
    this.class = `fa fa-${this.icon} fa-${this.size}x`;
  }
}
