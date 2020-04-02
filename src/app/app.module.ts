import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopPageModule } from './shop-page/shop-page.module';
import { ShoppingCardComponent } from './card/shopping-card/shopping-card.component';
import { WishlistComponent } from './card/wishlist/wishlist.component';
import { CardModule } from './card/card.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ShopPageModule,
    CardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
