import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  entryComponents: [
    ButtonComponent
  ]
})
export class ProductCardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() price: Number;
  @Input() productId: Number;
  @Input() addFunction: Function;

  public addToCart() {
    this.addFunction(this.productId);
  }

}
