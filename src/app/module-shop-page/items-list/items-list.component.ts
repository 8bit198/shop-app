import { Component, OnInit } from '@angular/core';
import { ShopItemsService } from 'src/app/services/shop-tems-service/shop-items.service';
import { TabService } from 'src/app/services/service-tab/tab.service';

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
    private tabService: TabService) { }

  ngOnInit() {
    this.shopItemsService.getGoods().subscribe(
      res => {
        this.goods = res;
      }
    );
    this.tabService.setCurrentTab()
    this.currentTab = this.tabService.currentTab
  }

}

interface IGoods {
  id: number;
  name: string;
}
