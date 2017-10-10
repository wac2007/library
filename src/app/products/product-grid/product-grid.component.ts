import { Component, Input } from '@angular/core';

import { AlertService } from '../../shared/alert/alert.service';
import { CartService } from '../shared/cart-service/cart.service';
import { Product } from '../shared/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../shared/product-service/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
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
    public cartService: CartService,
    public alertService: AlertService
  ) {
    this.getProducts();
  }

  private getProducts() {
    this.products = this.service.list();
  }

  public addToCart(product: Product) {
    this.cartService.setItem(product, 1);
    this.alertService.showAlert(`${product.title} Adicionado ao carrinho!`);
  }


}
