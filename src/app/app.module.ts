import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { StoreComponent } from './components/store/store.component';
import { Product } from './model/product/product.model';
import { RouterModule } from '@angular/router';
import { Cart } from './model/cart/cart.model';
import { Order } from './model/order/order.model';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditCard } from './model/credit-cart/credit-card.model';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { environment } from './environments/environment';
import { OrderSentComponent } from './components/order-sent/order-sent.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule],
  declarations: [
    AppComponent,
    StoreComponent,
    CartComponent,
    CheckoutComponent,
    OrderSentComponent
  ],
  providers: [Product, Cart, Order, CreditCard],
  bootstrap: [AppComponent]
})
export class AppModule {}
