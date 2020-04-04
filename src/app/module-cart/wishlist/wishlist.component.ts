import { Component, OnInit } from '@angular/core';
import { TabService } from 'src/app/services/service-tab/tab.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(
    private tabService: TabService
  ) { }

  ngOnInit() {
    this.tabService.setCurrentTab()
  }

}
