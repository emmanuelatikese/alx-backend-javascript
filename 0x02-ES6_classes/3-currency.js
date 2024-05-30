export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a String');
    }
    this._name = val;
  }

  get code() { return this._code; }

  set code(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = val;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
