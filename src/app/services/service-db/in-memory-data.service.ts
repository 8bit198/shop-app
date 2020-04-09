import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  genId(cartItems): number {
    return cartItems.length > 0 ? Math.max(...cartItems.map(heroine => heroine.id)) + 1 : 11;
}

  constructor() { }
  createDb() {
    const goods = [
      { id: 1, name: 'Iphone 8 Plus', price: '45000', pic: ['iphone8plus1.jpg', 'iphone8plus2.jpg'] },
      { id: 2, name: 'Iphone 10', price: '55000', pic: ['iphone10-1.png', 'iphone10-2.png'] },
      { id: 3, name: 'Iphone 11', price: '65000', pic: ['iphone11-1.png', 'iphone11-2.png'] },
      { id: 4, name: 'Iphone 5', price: '4000', pic: ['iphone51.jpg', 'iphone52.jpg'] },
      { id: 5, name: 'Iphone 4', price: '3000', pic: ['iphone41.jpg'] },
      { id: 6, name: 'Iphone 3GS', price: '10000', pic: ['iphone3gs.jpg'] },
      { id: 7, name: 'Iphone 7', price: '20000', pic: ['iphone7.jpg'] },
      { id: 8, name: 'IMac', price: '100000', pic: ['imac1.jpg', 'imac2.jpg'] },
      { id: 9, name: 'Ipad Pro', price: '90000', pic: ['ipad1.jpg', 'ipad2.jpg'] },
    ];

    const cartItems = [];

    const whishlistItems = [];

    return {goods, cartItems, whishlistItems};
  }
}
