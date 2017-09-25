import { Product } from '../product';

export class CartItem {
  product: Product;
  quant: number;

  constructor(product: Product, quant: number) {
    this.product = product;
    this.quant = quant;
  }
}