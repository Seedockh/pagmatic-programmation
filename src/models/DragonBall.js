import Figurine from './Figurine';

class DragonBall extends Figurine {

  #_character;

  constructor(character) {
    super();
    this.#_character = character;

    this.setType(`Dragon Ball figurine ${this.#_character}`);

    console.log(`${this.getType()} is singing -->
CHA-LA HEAD CHA-LA
Nani ga okite mo kibun wa heno-heno kappa
CHA-LA HEAD CHA-LA
Mune ga pachi-pachi suru hodo
Sawagu Genki-Dama --Sparking !`);
  }
}

export default DragonBall;
