import { Injectable } from '@angular/core';

import { serverProducts } from './mock-products';
import { Product } from '../../shared/product';

@Injectable()
export class ProductService {
  list(): Product[] {
    return serverProducts;
  }

}
