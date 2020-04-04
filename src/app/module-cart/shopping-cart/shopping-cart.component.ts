import { Component, OnInit } from '@angular/core';
import { TabService } from 'src/app/services/service-tab/tab.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public currentTab: string;

  constructor(
    private tabService: TabService
  ) { }

  ngOnInit(): void {
    this.tabService.setCurrentTab()
    this.currentTab = this.tabService.currentTab
  }

}
