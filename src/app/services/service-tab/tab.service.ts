import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  currentTab;

  constructor(private router: Router) { }

  setCurrentTab() {
    this.currentTab = this.router.url.split('/')[1];
  }
}
