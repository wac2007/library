import { Component, Input } from '@angular/core';

import { CartService } from '../shared/cart-service/cart.service';
import { Product } from '../shared/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../shared/product-service/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
  entryComponents: [ 
    ProductCardComponent
  ],
  providers: [
    ProductService,
  ]
})
export class ProductGridComponent {
  private products = [];

  constructor(
    private service: ProductService,
    public cartService: CartService
  ) {
    this.getProducts();
  }

  private getProducts() {
    this.products = this.service.list();
  }

  public addToCart(product: Product) {
    this.cartService.setItem(product, 1);
  }


}
