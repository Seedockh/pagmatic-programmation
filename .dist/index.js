"use strict";

var _TableFactory = _interopRequireDefault(require("./patterns/TableFactory"));

var _ConveyorBeltFactory = _interopRequireDefault(require("./patterns/ConveyorBeltFactory"));

var _Elf = _interopRequireDefault(require("./models/Elf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log("\n||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n\n                         ###   RUSH EFREI KLAUS   ###\n\n||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n");
console.log("\n-----------------------------------------------------------\n   MAKING A TABLE :\n-----------------------------------------------------------");
var tableFactory = new _TableFactory["default"]();
var table = tableFactory.makeTable();
console.log("\n-----------------------------------------------------------\n   MAKING A CONVEYOR BELT :\n-----------------------------------------------------------");
var conveyorBeltFactory = new _ConveyorBeltFactory["default"]();
var conveyorBelt = conveyorBeltFactory.makeConveyorBelt();
console.log("\n-----------------------------------------------------------\n   PACKING AND SENDING THE MAGIC :\n-----------------------------------------------------------");
var elrond = new _Elf["default"]('Elrond');
conveyorBelt.object.open();
elrond.pack(conveyorBelt.object, table.objects[0]);
console.log('\n');
elrond.out(conveyorBelt.furniture);
console.log('\n');
var updateConveyorBelt = elrond["in"](conveyorBelt.furniture);
elrond.pack(updateConveyorBelt.getArrayObjects()[0], table.objects[1]);
console.log('\n');
elrond.out(conveyorBelt.furniture);
console.log('\n');