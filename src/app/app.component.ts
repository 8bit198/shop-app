import { Component, AfterContentChecked, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TabService } from './services/service-tab/tab.service';
import { ShopItemsService } from './services/service-shop-tems/shop-items.service';
import { Subscription, Observable } from 'rxjs';
import NotificationHelper, { compareByDate } from './helpers/notification-helper'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends NotificationHelper implements AfterContentChecked, OnInit {  
  public currentTab: string;

  public wishListItems;

  public showPopup = false;

  public wishlistLength = '0';

  public cartlistLength = '0';

  public cartlistSumm = '0';

  private subscription: Subscription;

  constructor(
    private router: Router,
    public shopItemsService: ShopItemsService) {
      super();
      router.events.subscribe(() => this.showPopup = false);
      shopItemsService.whishlistActivated$.subscribe(
        res => {
          this.wishlistLength = res.toString()
        });
      shopItemsService.cartlistActivated$.subscribe(
        (res: any) => {
          this.cartlistLength = res.length.length;
          this.cartlistSumm = res.summ;
        });
    }

  ngAfterContentChecked() {
    this.currentTab = this.router.url.split('/')[1];
  }

  ngOnInit() {
  }

  getWhishlistItems() {
    this.shopItemsService.getWhishlistItems().subscribe(
      res => {
        this.shopItemsService.currentWishlistItems = res
        this.wishlistLength = this.shopItemsService.currentWishlistItems.length;
        this.shopItemsService.currentWishlistItems = this.shopItemsService.currentWishlistItems.sort(compareByDate);
        if (this.shopItemsService.currentWishlistItems.length > 4) {
          this.shopItemsService.currentWishlistItems.length = 5;
        }
      }
    );
  }

  onWhishlistClicked() {
    this.showPopup = !this.showPopup;
    this.getWhishlistItems();
  }

}
