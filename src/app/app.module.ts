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
import { InMemoryDataService } from './services/service-db/in-memory-data.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { CommonModule } from '@angular/common';
import { AddCartDialogComponent } from './module-shop-page/add-cart-dialog/add-cart-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    AddCartDialogComponent,
  ],
  imports: [
    CommonModule,
    ShopPageModule,
    CartModule,
    HttpClientModule,
    FormsModule,
    TextMaskModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [AddCartDialogComponent],
  entryComponents: [AddCartDialogComponent],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
