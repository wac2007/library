import { randomString } from '../../../shared/helpers';

export class Cart {
  constructor(
    public idCart: string = randomString(),
    public items: Object = new Object(),
    public count: number = 0,
    public total: number = 0
  ) {
  }
}