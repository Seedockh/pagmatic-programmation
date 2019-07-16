import Furniture from './Furniture';
import GiftWrap from './GiftWrap';

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

  inButton() {
    const paper = new GiftWrap();
    this.addObject(paper);
    this.#isBusy = true;
  }

  outButton() {
    this.popObject();
    this.#isBusy = false;
  }
}

export default ConveyorBelt;
