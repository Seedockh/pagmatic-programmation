class Toy {
  #position;

  #isPacked;

  #type;

  constructor() {
    console.log('\n***************************************');
    console.log('        ~~~ NEW TOY CREATED ~~~        ');
    console.log('***************************************');
  }

  isMoved() {
    switch (this.constructor.name) {
      case 'Pony' : console.log('\nHuuuuuuhu!\n');
        break;
      case 'DragonBall' : console.log('\nKamé Hamé Ha!\n');
        break;
      default: null;
    }
    return this.#position++;
  }

  getPosition() {
    console.log(this.#position);
    return this.#position;
  }

  getIsPacked() {
    console.log(this.#isPacked);
    return this.#isPacked;
  }

  getType() {
    console.log(this.#type);
    return this.#type;
  }
}

export default Toy;
