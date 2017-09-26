import { Product } from '../product';

export class CartItem {
  constructor(
    public product: Product,
    public quant: number
  ) {
  }

  public getSubTotal() {
    return this.product.price * this.quant;
  }
}