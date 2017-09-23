import { Component, OnInit } from '@angular/core';

import { ProductGridComponent } from '../../products/product-grid/product-grid.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  entryComponents: [
    ProductGridComponent
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
