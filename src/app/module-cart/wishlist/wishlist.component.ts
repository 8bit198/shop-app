import { Component, OnInit } from '@angular/core';
import { TabService } from 'src/app/services/service-tab/tab.service';
import { ShopItemsService } from 'src/app/services/service-shop-tems/shop-items.service';
import { AddCartDialogComponent } from 'src/app/module-shop-page/add-cart-dialog/add-cart-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  // public currentWishlistItems;

  constructor(
    public shopItemsService: ShopItemsService,
    private tabService: TabService,
    public dialog: MatDialog
  ) { }

  getWishlistItems() {
    this.shopItemsService.getWhishlistItems().subscribe(
      res => {
        this.shopItemsService.currentWishlistItems = res;
        console.log('this.currentWishlistItems: ', this.shopItemsService.currentWishlistItems)
      }
    )
  }

  deleteFromWishlist(id) {
    this.shopItemsService.deleteWhishlistItems(id).subscribe(
      res => {
        this.shopItemsService.whishlistActivate(this.shopItemsService.currentWishlistItems.length - 1);
        this.getWishlistItems();
      }
    )
  }

  ngOnInit() {
    this.tabService.setCurrentTab();
    this.getWishlistItems();
  }

  onDelete(id) {
    this.deleteFromWishlist(id);
  }

  onAddToCart(wishlistItem): void {
    const dialogRef = this.dialog.open(AddCartDialogComponent, {
      width: '500px',
      data: wishlistItem
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'add') {
        this.onDelete(wishlistItem.id);
      }
      this.getWishlistItems();
    });
  }

}
