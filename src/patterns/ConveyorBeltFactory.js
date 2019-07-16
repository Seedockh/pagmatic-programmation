import PTapisRoulant from './PTapisRoulant';

class ConveyorBeltFactory extends PTapisRoulant {

  constructor() {
    super()
  }

  makeConveyorBelt() {
    const box = this.createBox();
    const conveyorBelt = this.createConveyorBelt();

    conveyorBelt.put(box);

    return { object: box, furniture: conveyorBelt }
  }
}


export default ConveyorBeltFactory;
