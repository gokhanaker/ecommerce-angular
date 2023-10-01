import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../components/cart/cart.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { StoreComponent } from '../components/store/store.component';
import { OrderSentComponent } from '../components/order-sent/order-sent.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-sent', component: OrderSentComponent },
  { path: '**', component: StoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
