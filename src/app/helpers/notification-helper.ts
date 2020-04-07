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

  areAllFieldsFilled(formValues, exeption) {
    console.log('formValues: ', formValues)
    for (const key in formValues) {
      if (formValues.hasOwnProperty(key)) {
        console.log(key, exeption)
        if (!formValues[key] && key !== exeption) {
          return false;
        }
      }
    }
    return true;
  }

}