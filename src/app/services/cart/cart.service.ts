import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Product } from '../../models/product';

@Injectable()
export class CartService {

  constructor() {
    this.products = [];
  }

  products: Product[];

  add(product: Product) {
    this.products.push(product);
  }

  remove(product: Product) {
    const index = _.findIndex(this.products, {id:product.id});
    this.products.splice(index, 1);
  }

  get() {
    return this.products;
  }

}
