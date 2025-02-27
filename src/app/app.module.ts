import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from '@components/cart/cart.component';
import { StoreComponent } from '@components/store/store.component';
import { CheckoutComponent } from '@components/checkout/checkout.component';
import { OrderSentComponent } from '@components/order-sent/order-sent.component';
import { Product } from '@models/product/product.model';
import { Cart } from '@models/cart/cart.model';
import { Order } from '@models/order/order.model';
import { CreditCard } from '@models/credit-cart/credit-card.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '@environments/environment';

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
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
