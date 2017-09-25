import { CartItem } from './cart-item';
import { randomString } from '../../../shared/helpers';

export class Cart {
  idCart: string;
  items: CartItem[] = [];
  count: Number = 0;
  total: Number = 0;

  constructor(idCart?: string, items?: CartItem[], count?: Number, total?: Number) {
    this.idCart = idCart ? idCart : randomString();
    
    if (items && count && total) {
      this.items = items;
      this.count = count;
      this.total = total;
    }
  }
}