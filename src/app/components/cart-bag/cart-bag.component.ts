import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart/cart.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-cart-bag',
  templateUrl: './cart-bag.component.html',
  styleUrls: ['./cart-bag.component.scss']
})
export class CartBagComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.get();
  }

  products: Product[];

}
