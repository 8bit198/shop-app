export default class NotificationHelper {
  public errorMessage: string;

  public successMessage: string;

  public TIMER = 2000;

  constructor() {}

  onError(text) {
    this.errorMessage = text;
    setTimeout(() => {this.errorMessage = ''; }, this.TIMER);
  }

  onSuccess(text) {

    this.successMessage = text;
    setTimeout(() => {this.successMessage = ''; }, this.TIMER);
  }

}