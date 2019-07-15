import Furniture from './Furniture';

class ConveyorBelt extends Furniture {

  #isBusy;

  constructor() {
    super();
    this.setIsBusy(false);
  }

  getIsBusy() {
    return this.#isBusy;
  }

  setIsBusy(bool) {
    this.#isBusy = bool;
  }
}

export default ConveyorBelt;
