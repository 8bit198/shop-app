import { Component, OnInit } from '@angular/core';
import { TabService } from 'src/app/services/service-tab/tab.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import NotificationHelper from 'src/app/helpers/notification-helper';
import { ShopItemsService, ICartItems } from 'src/app/services/service-shop-tems/shop-items.service';
import { InMemoryDataService } from 'src/app/services/service-db/in-memory-data.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent extends NotificationHelper implements OnInit  {
  public JSONmessage: string;

  public isFormSubmitted = false;

  public currentTab: string;

  public currentCartItems;

  public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public customerInfoForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,0-9]{1,100}$/)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    adress: new FormControl('', [Validators.required, Validators.pattern(/^[^±!@£$%^&*_+§¡€#¢§¶•ªº<>?:;|=]{1,100}$/)]),
    phoneNumber: new FormControl(''),
    message: new FormControl(''),
  });

  get name() {return this.customerInfoForm.get('name'); }
  get email() {return this.customerInfoForm.get('email'); }
  get adress() {return this.customerInfoForm.get('adress'); }
  get phoneNumber() {return this.customerInfoForm.get('phoneNumber'); }
  get message() {return this.customerInfoForm.get('message'); }

  constructor(
    public shopItemsService: ShopItemsService,
    private tabService: TabService
  ) {
    super();
  }

  getCartItems(){
    this.shopItemsService.getCartItems().subscribe(res => {
      console.log('res: ', res);
      this.shopItemsService.currentCartItems = res;
      this.shopItemsService.cartlistActivate(this.shopItemsService.currentCartItems)
    }, err => console.log(err))
  }

  ngOnInit(): void {
    this.tabService.setCurrentTab();
    this.currentTab = this.tabService.currentTab;
    console.log('items = ', this.shopItemsService.currentCartItems)
    this.getCartItems();
  }

  onAddWhishlistItem(item) {
    item = { ...item, quantity: 1, createdAt: new Date()}
    this.shopItemsService.addWhishlisttItem(item).subscribe(
      res => {
        this.shopItemsService.getWhishlistItems().subscribe(
        res => {
          this.shopItemsService.currentWishlistItems = res;
          this.shopItemsService.whishlistActivate(this.shopItemsService.currentWishlistItems.length);
        });
        this.shopItemsService.getCartItems().subscribe(
          res => {
            this.shopItemsService.currentCartItems = res;
            this.shopItemsService.cartlistActivate(this.shopItemsService.currentCartItems);
          }
        );
    }
    );
    this.deleteCartItem(item.id);
  }

  deleteCartItem(id) {
    this.shopItemsService.deleteCartItems(id).subscribe(
      res => {
        this.getCartItems();
      }
    )
  }

  onDelete(id) {
    this.deleteCartItem(id);
  }

  checkFormForErrors() {
    if (!this.areAllFieldsFilled(this.customerInfoForm.value, 'message')) {
      this.onError('Заполните все поля');
      return false;
    } else if (this.name.invalid) {
      this.onError('ФИО содержит недопустимые символы');
      return false;
    } else if (this.email.invalid) {
      this.onError('Некорректный Email');
      return false;
    } else if (this.adress.invalid) {
      this.onError('Адрес содержит недопустимые символы');
      return false;
    } else if (this.phoneNumber.value.includes('_')) {
      this.onError('Введите номер телефона');
      return false;
    }
    return true;
  }

  onSubmit() {
    this.isFormSubmitted = true;
    if (!this.shopItemsService.currentCartItems.length) {
      this.onError('Добавьте товары и заполните поля');
    } else if (this.checkFormForErrors()) {
      this.JSONmessage = JSON.stringify({customerInfo: this.customerInfoForm.value, cartItems: this.shopItemsService.currentCartItems});
      this.onSuccess('Заказ готовится к отправке');
      console.log('Send', this.JSONmessage);
    }
  }

}
