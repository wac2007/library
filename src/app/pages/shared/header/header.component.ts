import { Component, Input} from '@angular/core';

import { CartService } from '../../../products/shared/cart-service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: String;
  
  constructor(
    public cartService: CartService
  ) { }

  getCount() {
    return this.cartService.getDistinctCount()
  }
}
