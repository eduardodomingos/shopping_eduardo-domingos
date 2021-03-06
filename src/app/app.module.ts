import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CartBagComponent } from './components/cart-bag/cart-bag.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { ProductDataService } from './services/data/product-data.service';
import { CartService } from './services/cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartBagComponent,
    CartSummaryComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ProductDataService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
