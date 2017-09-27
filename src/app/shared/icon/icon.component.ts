import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
  public class: String;

  ngOnInit() {
    this.class = `fa fa-${this.icon} fa-${this.size}x`;
  }

  @Input() icon: String;
  @Input() size: number = 1;
}
