import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart/cart.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.get();
  }

  products: Product[];

  totalItems(){
      return this.products.length;
  }

  totalPrice(){
      return this.products.reduce((total, num) => total + num.price , 0);
  }

}
