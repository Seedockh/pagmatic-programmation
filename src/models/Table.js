import Furniture from './Furniture';

class Table extends Furniture {

  #content = [];

  constructor() {
    super();
  }

  getContent() {
    return this.#content;
  }

  setContent(object) {
    if (this.#content.length > 9) {
      console.log("... *CRACK* ! Wow, calm down, I'm already full !\n");
      return false;
    }
    return this.#content.push(object);
  }

  takeContent(pos) {
    const object = this.#content[pos];
    this.#content.splice(pos,1);
    return object;
  }
}

export default Table;
