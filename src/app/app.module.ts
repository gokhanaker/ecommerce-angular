import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { StoreComponent } from './components/store/store.component';
import { Product } from './model/product/product.model';
import { RouterModule } from '@angular/router';
import { StaticDataSource } from './model/static.datasource';
import { Cart } from './model/cart/cart.model';
import { Order } from './model/order/order.model';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    StoreComponent,
    CartComponent,
    OrderComponent
  ],
  providers: [Product, StaticDataSource, Cart, Order],
  bootstrap: [AppComponent]
})
export class AppModule { }
