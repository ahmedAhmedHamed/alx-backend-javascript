export default class Building {
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Error: Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }
}
