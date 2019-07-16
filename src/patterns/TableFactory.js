import PTable from './PTable';

class TableFactory extends PTable {

  constructor() {
    super()
  }

  makeTable() {
    const pony = this.createPony();
    const dragonball = this.createDragonBall();
    const table = this.createTable();

    table.put(pony);
    table.put(dragonball);

    return { objects: [ pony, dragonball ], furniture: table }
  }
}

export default TableFactory;
