import { randomString } from '../../../shared/helpers';

export class Cart {
  constructor(
    public items: Object = new Object(),
    public count: number = 0,
    public total: number = 0
  ) {
  }
}