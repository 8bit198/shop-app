import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const goods = [
      { id: 1, name: 'Iphone 5s' },
      { id: 2, name: 'Iphone 7 Plus' },
      { id: 3, name: 'Iphone 11' },
      { id: 4, name: 'Iphone 8' },
      { id: 5, name: 'Iphone 5s' },
      { id: 6, name: 'Iphone 7 Plus' },
      { id: 7, name: 'Iphone 11' },
      { id: 8, name: 'Iphone 8' }
    ];
    return {goods};
  }
}
