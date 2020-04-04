import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShopPageModule } from './module-shop-page/shop-page.module';
import { CartModule } from './module-cart/cart.module';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/db-service/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ShopPageModule,
    CartModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
