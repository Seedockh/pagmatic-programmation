import ToyAbstract from './ToyAbstract';

class Toy extends ToyAbstract {

  constructor() {
    super();
  }

  isMoved() {
    switch (this.constructor.name) {
      case 'Pony' : console.log('Huuuuuuhu!\n');
        break;
      case 'DragonBall' : console.log('Kamé Hamé Ha!\n');
        break;
      default: null;
    }
  }
}

export default Toy;
