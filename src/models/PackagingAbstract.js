class PackagingAbstract {

  #isOpen;

  #toy;

  constructor() {
    console.log('\n     ~~~ NEW PACKAGING CREATED ~~~     ');
    console.log('=======================================');
    console.log(`   >>> ${this.constructor.name}\n`);
    Object.freeze(this);
  }

  getIsOpen() {
    return this.#isOpen;
  }

  setIsOpen(bool) {
    this.#isOpen = bool;
  }

  getToy() {
    return this.#toy;
  }

  setToy(toy) {
    this.#toy = toy;
  }
}

export default PackagingAbstract;
