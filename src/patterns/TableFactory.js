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

    console.log(table.getObjects());
  }
}

export default TableFactory;
