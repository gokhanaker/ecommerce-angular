import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { StoreComponent } from './components/store/store.component';
import { Product } from './model/product/product.model';
import { RouterModule } from '@angular/router';
import { StaticDataSource } from './model/static.datasource';
import { Cart } from './model/cart/cart.model';
import { Order } from './model/order/order.model';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { CreditCard } from './model/credit-cart/credit-card.model';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    StoreComponent,
    CartComponent,
    CheckoutComponent
  ],
  providers: [Product, StaticDataSource, Cart, Order, CreditCard],
  bootstrap: [AppComponent]
})
export class AppModule {}
