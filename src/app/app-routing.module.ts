import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsListComponent } from './module-shop-page/items-list/items-list.component';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './module-cart/shopping-cart/shopping-cart.component';
import { WishlistComponent } from './module-cart/wishlist/wishlist.component';


const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: ItemsListComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'wishlist', component: WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
