import PTapisRoulant from './PTapisRoulant';

class ConveyorBeltFactory extends PTapisRoulant {

  constructor() {
    super()
  }

  makeConveyorBelt() {
    const box = this.createBox();
    const conveyorBelt = this.createConveyorBelt();

    conveyorBelt.put(box);

    console.log(conveyorBelt.getObjects());
  }
}


export default ConveyorBeltFactory;
