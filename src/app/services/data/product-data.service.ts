import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductDataService {

  constructor(private http: Http) { }

  getProducts() {
  return this.http.get('assets/mocks/products.json')
    .map(response => <Product[]>response.json().data);
  }

}
