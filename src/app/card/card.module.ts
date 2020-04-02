import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';



@NgModule({
  declarations: [
    WishlistComponent,
    ShoppingCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WishlistComponent,
    ShoppingCardComponent
  ]
})
export class CardModule { }
