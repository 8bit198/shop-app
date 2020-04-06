import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    WishlistComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule
  ],
  exports: [
    WishlistComponent,
    ShoppingCartComponent
  ]
})
export class CartModule { }
