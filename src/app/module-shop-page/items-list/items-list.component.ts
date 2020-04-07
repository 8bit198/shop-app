import { Component, OnInit, Inject } from '@angular/core';
import { ShopItemsService } from 'src/app/services/service-shop-tems/shop-items.service';
import { TabService } from 'src/app/services/service-tab/tab.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCartDialogComponent } from '../add-cart-dialog/add-cart-dialog.component';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  public goods;
  public currentTab: string;

  constructor(
    private shopItemsService: ShopItemsService,
    private tabService: TabService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.shopItemsService.getGoods().subscribe(
      res => {
        this.goods = res;
      }
    );
    this.tabService.setCurrentTab();
    this.currentTab = this.tabService.currentTab;
  }

  onAddWhishlistItem(item) {
    item = { ...item, quantity: 1, createdAt: new Date()}
    this.shopItemsService.addWhishlisttItem(item).subscribe();
  }

  onAddCartItem(cartItem): void {
    cartItem = { ...cartItem, quantity: 1}
    const dialogRef = this.dialog.open(AddCartDialogComponent, {
      width: '500px',
      data: cartItem
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

interface IGoods {
  id: number;
  name: string;
}
