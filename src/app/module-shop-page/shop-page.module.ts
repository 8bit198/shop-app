import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import { ItemsListComponent } from './items-list/items-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    ItemsListComponent
  ]
})
export class ShopPageModule { }
