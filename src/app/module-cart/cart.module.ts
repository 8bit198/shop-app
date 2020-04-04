import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    WishlistComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WishlistComponent,
    ShoppingCartComponent
  ]
})
export class CartModule { }
