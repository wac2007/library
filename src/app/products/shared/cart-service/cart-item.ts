import { Product } from '../product';

export class CartItem {
  product: Product;
  quant: number;

  constructor(product: Product, quant: number) {
    Object.assign(this, {
      product,
      quant
    });
  }
}