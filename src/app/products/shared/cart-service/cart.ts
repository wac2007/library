import { randomString } from '../../../shared/helpers';

export class Cart {
  idCart: string;
  items: Object = new Object();
  count: number = 0;
  total: number = 0;

  constructor(idCart?: string, items?: Object, count?: number, total?: number) {
    this.idCart = idCart ? idCart : randomString();
    
    if (items && count && total) {
      Object.assign(this, {
        items,
        count,
        total
      });
    }
  }
}