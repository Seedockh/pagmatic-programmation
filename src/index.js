import TableFactory from './patterns/TableFactory';
import ConveyorBeltFactory from './patterns/ConveyorBeltFactory';
import Elf from './models/Elf';

console.log(`
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

                         ###   RUSH EFREI KLAUS   ###

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
`);

console.log(`
-----------------------------------------------------------
   MAKING A TABLE :
-----------------------------------------------------------`);
const table = new TableFactory;
table.makeTable();

console.log(`
-----------------------------------------------------------
   MAKING A CONVEYOR BELT :
-----------------------------------------------------------`);
const conveyorBelt = new ConveyorBeltFactory;
conveyorBelt.makeConveyorBelt();

console.log(`
-----------------------------------------------------------
   PACKING :
-----------------------------------------------------------`);
const elrond = new Elf('Elrond');
