import { Injectable } from '@angular/core';

const serverProducts = [
  {
    productId: 1,
    title: 'Book ABC',
    imageUrl: 'http://via.placeholder.com/150x150',
    price: 10,
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.'
  },
  {
    productId: 2,
    title: 'Book XYZ',
    imageUrl: 'http://via.placeholder.com/150x150',
    price: 10,
    description: 'Ut pretium arcu odio, nec mattis lacus dictum sed. Nulla vitae sollicitudin nunc.'
  }
];

@Injectable()
export class ProductService {

  constructor() { }

  list () {
    return serverProducts;
  }

}