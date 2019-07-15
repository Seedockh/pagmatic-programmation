import Packaging from './Packaging';

class Box extends Packaging {

  constructor() {
    super();
    this.setIsOpen(false);
    this.setToy(null);
  }
}

export default Box;
