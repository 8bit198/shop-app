import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopItemsService {
  private SERVER_URL = `/api`;

  public currentWishlistItems;

  public currentCartItems;

  private cartlistActivatedSource = new Subject();

  private whishlistActivatedSource = new Subject();

  whishlistActivated$ = this.whishlistActivatedSource.asObservable();

  cartlistActivated$ = this.cartlistActivatedSource.asObservable();

  whishlistActivate(length) {
    this.whishlistActivatedSource.next(length);
  }

  cartlistActivate(length) {
    let summ = 0;
    for (const item of this.currentCartItems) {
      summ = summ + item.price * item.quantity;
    }

    this.cartlistActivatedSource.next({length, summ});
  }

  constructor(
    private http: HttpClient
  ) { }

  getGoods() {
    return this.http.get(`${this.SERVER_URL}/goods`);
  }

  addCartItem(cartItem: {id: number, name: string, price: string, pic: string[]}) {
    console.log(cartItem)
    return this.http.post(`${this.SERVER_URL}/cartItems`, cartItem);
  }

  getCartItems() {
    return this.http.get(`${this.SERVER_URL}/cartItems`);
  }

  deleteCartItems(id) {
    console.log('id: ', id)
    return this.http.delete(`${this.SERVER_URL}/cartItems/${id}`);
  }

  addWhishlisttItem(whishlistItems: {id: number, name: string, price: string, pic: string[]}) {
    return this.http.post(`${this.SERVER_URL}/whishlistItems`, whishlistItems);
  }

  getWhishlistItems() {
    return this.http.get(`${this.SERVER_URL}/whishlistItems`);
  }

  deleteWhishlistItems(id) {
    console.log('id: ', id)
    return this.http.delete(`${this.SERVER_URL}/whishlistItems/${id}`);
  }
}

interface IGoods {
  id: number;
  name: string;
}

export interface ICartItems {
  id: number;
  name: string;
  price: string;
  pic: string[]
}
