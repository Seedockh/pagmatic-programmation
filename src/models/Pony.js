import Toy from './Toy';

class Pony extends Toy {

  #_nb = 1;

  #id;

  constructor (name) {
    super();
    console.log(this.#_nb);
    this.id = this.#_nb;
    this.#_nb++;
    this.name = name;
    this.position = 0;
    this.isPacked = false;
    this.type = `Pony #${this.id}`

    console.log(`${this.type} is singing -->
Dou-double poney, j’fais izi money
D’où tu m’connais ? Parle moi en billets violets
Dou-double poney, j’fais izi money`);
  }

  getName() {
    console.log(this.name);
    return this.name;
  }
}

export default Pony;
