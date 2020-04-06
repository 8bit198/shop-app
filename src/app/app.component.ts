import { Component, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { TabService } from './services/service-tab/tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked {
  currentTab: string;

  constructor(private router: Router) {}

  ngAfterContentChecked() {
    this.currentTab = this.router.url.split('/')[1];
    console.log('this.currentTab: ', this.currentTab);
  }

}
