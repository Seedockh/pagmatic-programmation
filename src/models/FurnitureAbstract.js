class FurnitureAbstract {

  #objects = [];

  constructor() {
    console.log('\n     ~~~ NEW FURNITURE CREATED ~~~      ');
    console.log(`     >>> ${this.constructor.name}\n`);
    Object.freeze(this);
  }

  getObjects() {
    return this.#objects.map( obj => obj.constructor.name );
  }

  setObjects(objects) {
    return this.#objects = objects;
  }

  addObject(object) {
    this.#objects.push(object);
    return this.#objects;
  }

  popObject() {
    this.#objects.pop();
    return this.#objects;
  }
}

export default FurnitureAbstract;
