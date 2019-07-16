import Table from '../models/Table';
import Pony from '../models/Pony';
import DragonBall from '../models/DragonBall';
import DBHeroes from '../constants/DBHeroes';

// GET THE TOYS HERE
class PTable {
  
  createPony() {
    const pony = new Pony();
    return pony;
  }

  createDragonBall() {
    const dragonball = new DragonBall(DBHeroes.bejita);
    return dragonball;
  }

  createTable() {
    const table = new Table();
    return table;
  }
}

export default PTable;
