import { Component } from '@angular/core';
import { CartService } from '../products/shared/cart-service/cart.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  providers: [
    CartService
  ]
})
export class CoreComponent {

}
