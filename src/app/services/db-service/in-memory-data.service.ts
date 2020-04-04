import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const goods = [
      { id: 1, name: 'IMac', price: '1000', pic: ['imac1.jpg', 'imac2.jpg'] },
      { id: 2, name: 'Ipad Pro', price: '1000', pic: ['ipad1.jpg', 'ipad2.jpg'] },
      { id: 3, name: 'Iphone 8 Plus', price: '1000', pic: ['iphone8plus1.jpg', 'iphone8plus2.jpg'] },
      { id: 4, name: 'Iphone 10', price: '1000', pic: ['iphone10-1.png', 'iphone10-2.png'] },
      { id: 5, name: 'Iphone 11', price: '1000', pic: ['iphone11-1.png', 'iphone11-2.png'] },
      { id: 6, name: 'MacBook Pro 2019', price: '1000', pic: ['macbook-1.jpg', 'macbook-2.jpg'] },
    ];
    return {goods};
  }
}
