import { TestBed } from '@angular/core/testing';

import { ShopItemsService } from './shop-items.service';

describe('ShopItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopItemsService = TestBed.get(ShopItemsService);
    expect(service).toBeTruthy();
  });
});
