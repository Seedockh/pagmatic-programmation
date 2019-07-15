import Packaging from './Packaging';

class GiftWrap extends Packaging {

  constructor() {
    super();
    this.setIsOpen(false);
    this.setToy(null);
  }

}

export default GiftWrap;
