import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() { return this._amount; }

  set amount(val) {
    if (!(typeof val === 'number')) {
      throw new TypeError('Amount must be a number');
    }
    this._amount = val;
  }

  get currency() { return this._currency; }

  set currency(val) {
    if (!(val instanceof Currency)) {
      throw new TypeError('Must be an instance of Currency');
    }
    this._currency = val;
  }

  displayFullPrice() { return `${this._amount} ${this.currency.name} ${this.currency.code}`; }

  static convertPrice(amount, conversionRate) {
    if (!((typeof amount === 'number') && (typeof conversionRate === 'number'))) {
      throw new TypeError('Amount and ConversionRate must be a Number');
    }
    return amount * conversionRate;
  }
}
