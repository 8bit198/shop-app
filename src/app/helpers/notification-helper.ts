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

  dateBeautify(dateRaw) {
    const date = new Date(dateRaw);
    const day = date.getDate().toString();
    const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1).toString();
    const year = date.getFullYear().toString();

    return `${day}.${month}.${year}  ${date.getHours()}:${date.getMinutes()}`
  }
}

export function compareByDate(a, b) {
  if (a.createdAt < b.createdAt) { return 1; }
  if (a.createdAt > b.createdAt) { return -1; }
  return 0;
}
