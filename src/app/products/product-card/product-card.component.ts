import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { Product } from '../shared/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  entryComponents: [
    ButtonComponent
  ]
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Output() selected = new EventEmitter<Product>();

  public currentProduct: Product;
  
  ngOnInit() {
    this.currentProduct = this.product;
  }

  public select() {
    this.selected.emit(this.product);
  }


}
