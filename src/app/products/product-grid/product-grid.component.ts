import { Component } from '@angular/core';

import { ProductService } from './services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../shared/product';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
  entryComponents: [ 
    ProductCardComponent
  ]
})
export class ProductGridComponent {
  private products = [];

  private getProducts() {
    this.products = this.service.list();
  }

  public addToCart(product: Product) {
    //todo: Implement Cart Logic
  }

  constructor(
    private service: ProductService
  ) {
    this.getProducts();
  }

}
