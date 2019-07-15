import Furniture from './Furniture';

class Table extends Furniture {

  #content;

  constructor() {
    super();
    this.#content = [];
  }

  getContent() {
    return this.#content;
  }

  setContent(toy) {
    if (this.#content.length > 9) return false;
    this.#content.push(toy);
  }
}

export default Table;
