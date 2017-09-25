import { CartItem } from './cart-item';
import { randomString } from '../../../shared/helpers';

export class Cart {
  idCart: string;
  items: CartItem[] = [];
  count: number = 0;
  total: number = 0;

  constructor(idCart?: string, items?: CartItem[], count?: number, total?: number) {
    this.idCart = idCart ? idCart : randomString();
    
    if (items && count && total) {
      this.items = items;
      this.count = count;
      this.total = total;
    }
  }
}