import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import { ItemsListComponent } from './items-list/items-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ItemsListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule
  ],
  exports: [
    ItemsListComponent,
  ],
})
export class ShopPageModule { }
