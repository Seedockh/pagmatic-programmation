import Toy from './Toy';

let nb = ((instances = 1) => {
  return { increment: () => instances++ }
})();

class Pony extends Toy {

  #_nb = nb.increment();

  #id;

  constructor () {
    super();
    this.#id = this.#_nb;
    
    this.setIsPacked(false);
    this.setType(`Pony #${this.#id}`);

    console.log(`${this.getType()} is singing -->
Dou-double poney, j’fais izi money
D’où tu m’connais ? Parle moi en billets violets
Dou-double poney, j’fais izi money`);
  }
}

export default Pony;
