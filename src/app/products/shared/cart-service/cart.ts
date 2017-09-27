import { randomString } from '../../../shared/helpers';

export class Cart {
  constructor(
    public items: Object = {},
    public count: number = 0
  ) {
  }
}