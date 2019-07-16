import ConveyorBelt from '../models/ConveyorBelt';
import Box from '../models/Box';
import GiftWrap from '../models/GiftWrap';

// GET THE PACKAGINGS HERE
class PTapisRoulant {

  createBox() {
    const box = new Box();
    return box;
  }

  createPaper() {
    const paper = new GiftWrap();
    return paper;
  }

  createConveyorBelt() {
    const tapis = new ConveyorBelt();
    return tapis;
  }
}

export default PTapisRoulant;
