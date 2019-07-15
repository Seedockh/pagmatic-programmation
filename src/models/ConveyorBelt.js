import Furniture from './Furniture';
import DragonBall from './DragonBall';
import GiftWrap from './GiftWrap';
import DBHeroes from '../constants/DBHeroes';

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

  inButton(elf) {
    const toy = new DragonBall(DBHeroes.sangoku);
    const paper = new GiftWrap();
    elf.pack(paper, toy);
    this.addObject(paper);
    this.#isBusy = true;
  }

  outButton() {
    this.popObject();
    this.#isBusy = false;
  }
}

export default ConveyorBelt;
