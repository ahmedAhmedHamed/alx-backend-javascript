import Building from './5-building';

export default class SkyHighBuilding extends Building {
  get floors() {
    return this._floors;
  }

  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
