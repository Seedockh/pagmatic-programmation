import FurnitureAbstract from './FurnitureAbstract'

class Furniture extends FurnitureAbstract {

  constructor() {
    super();
  }

  put(object) {
    switch(this.constructor.name) {
      case 'ConveyorBelt':
        if (!this.getIsBusy()) {
          this.addObject(object);
          this.setIsBusy(true);
          return this.getObjects();
        } else {
          console.log('Sorry, the conveyor belt is busy ATM !');
          return null;
        }
      case 'Table':
        if (this.setContent(object)) {
          this.setObjects(this.getContent());
        } else return null;
      default:
        break;
    }
  }

  take(position = null) {
    switch(this.constructor.name) {
      case 'ConveyorBelt':
        if (this.getIsBusy()) {
          this.popObject();
          return this.getObjects();
        } else {
          console.log('Sorry, the conveyor belt is busy ATM !');
          return null;
        }
      case 'Table':
        this.takeContent(position);
      default:
        break;
    }
  }
}

export default Furniture;
