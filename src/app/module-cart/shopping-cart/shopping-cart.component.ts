import { Component, OnInit } from '@angular/core';
import { TabService } from 'src/app/services/service-tab/tab.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import NotificationHelper from 'src/app/helpers/notification-helper';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent extends NotificationHelper implements OnInit  {
  public currentTab: string;

  public isEmailBlured = false;

  public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public customerInfoForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=.,]{1,100}$/)]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    adress: new FormControl('', [Validators.required, Validators.pattern(/^[^±!@£$%^&*_+§¡€#¢§¶•ªº«<>?:;|=.,]{1,100}$/)]),
    phoneNumber: new FormControl(''),
    message: new FormControl(''),
  });

  get name() {return this.customerInfoForm.get('name'); }
  get email() {return this.customerInfoForm.get('email'); }
  get adress() {return this.customerInfoForm.get('adress'); }
  get phoneNumber() {return this.customerInfoForm.get('phoneNumber'); }
  get message() {return this.customerInfoForm.get('message'); }

  constructor(
    private tabService: TabService
  ) {
    super();
  }

  ngOnInit(): void {
    this.tabService.setCurrentTab();
    this.currentTab = this.tabService.currentTab;
  }

  areAllFieldsFilled() {
    if(
      this.name.value === '' ||
      this.email.value === '' ||
      this.adress.value === '' ||
      this.phoneNumber.value === ''
    ) {
      return false;
    }
    return true;
  }

  checkFormForErrors() {
    console.log('this.phoneNumber: ', this.phoneNumber.value)
    if (!this.areAllFieldsFilled()) {
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
    console.log('this.checkFormForErrors():' , this.checkFormForErrors());
    if (this.checkFormForErrors()) {
      console.log('Send', this.name);
      this.onSuccess('Заказ готовится к отправке');
    }
  }

}
