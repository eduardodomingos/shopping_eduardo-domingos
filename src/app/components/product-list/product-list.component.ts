import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductDataService } from '../../services/data/product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productDataService: ProductDataService) { }

  ngOnInit() {
    this.productDataService.getProducts()
      .subscribe(products => this.products = products);
  }

  products: Product[];

}
