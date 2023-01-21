import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../components/cart/cart.component';
import { OrderComponent } from '../components/order/order.component';
import { StoreComponent } from '../components/store/store.component';

const routes: Routes = [
  {path: 'store', component: StoreComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
