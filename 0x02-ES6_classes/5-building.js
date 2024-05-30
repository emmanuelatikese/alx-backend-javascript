export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this.sqft = sqft;
  }

  get sqft() { return this._sqft; }

  set sqft(val) {
    if (!(typeof val === 'number')) {
      throw new TypeError('sqtf must be a number');
    }
    this._sqft = val;
  }
}
