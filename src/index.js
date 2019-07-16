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
const tableFactory = new TableFactory;
const table = tableFactory.makeTable();

console.log(`
-----------------------------------------------------------
   MAKING A CONVEYOR BELT :
-----------------------------------------------------------`);
const conveyorBeltFactory = new ConveyorBeltFactory;
const conveyorBelt = conveyorBeltFactory.makeConveyorBelt();

console.log(`
-----------------------------------------------------------
   PACKING AND SENDING THE MAGIC :
-----------------------------------------------------------`);
const elrond = new Elf('Elrond');

conveyorBelt.object.open();
elrond.pack( conveyorBelt.object, table.objects[0] );
console.log('\n');
elrond.out( conveyorBelt.furniture );

console.log('\n');
const updateConveyorBelt = elrond.in( conveyorBelt.furniture );

elrond.pack( updateConveyorBelt.getArrayObjects()[0], table.objects[1] );
console.log('\n');
elrond.out( conveyorBelt.furniture );
console.log('\n');
