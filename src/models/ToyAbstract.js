class ToyAbstract {

  #isPacked;

  #type;

  constructor() {
    console.log('\n        ~~~ NEW TOY CREATED ~~~        ');
    Object.freeze(this);
  }

  getIsPacked() {
    return this.#isPacked;
  }

  setIsPacked(bool) {
    this.#isPacked = bool;
  }

  getType() {
    return this.#type;
  }

  setType(type) {
    this.#type = type;
  }
}

export default ToyAbstract;
