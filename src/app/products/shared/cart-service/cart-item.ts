import { Product } from '../product';

export class CartItem {
  product: Product;
  quant: Number;

  constructor(product: Product, quant: Number) {
    this.product = product;
    this.quant = quant;
  }
}