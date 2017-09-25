import { Component, OnInit } from '@angular/core';

import { CartService } from '../../products/shared/cart-service/cart.service';
import { ProductGridComponent } from '../../products/product-grid/product-grid.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  entryComponents: [
    ProductGridComponent
  ]
})
export class HomeComponent {

  constructor(
    public cartService: CartService
  ) { }

}
