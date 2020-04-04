import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopItemsService {
  SERVER_URL = `/api`;

  constructor(
    private http: HttpClient
  ) { }

  getGoods() {
    return this.http.get(`${this.SERVER_URL}/goods`);
  }
}

interface IGoods {
  id: number;
  name: string;
}
