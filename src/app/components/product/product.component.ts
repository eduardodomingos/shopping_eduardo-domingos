import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'article.product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  percentOff(product: Product) {
    return Math.round(100*(product.priceOff/product.price));
  }

  addToCart(product: Product) {
    this.cartService.add(this.product);
  }

  removeFromCart(product: Product) {
    this.cartService.remove(this.product);
  }

}
