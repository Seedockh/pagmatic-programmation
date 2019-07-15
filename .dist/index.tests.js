"use strict";

var _Toy = _interopRequireDefault(require("./src/models/Toy"));

var _Pony = _interopRequireDefault(require("./src/models/Pony"));

var _Figurine = _interopRequireDefault(require("./src/models/Figurine"));

var _DragonBall = _interopRequireDefault(require("./src/models/DragonBall"));

var _Packaging = _interopRequireDefault(require("./src/models/Packaging"));

var _Box = _interopRequireDefault(require("./src/models/Box"));

var _GiftWrap = _interopRequireDefault(require("./src/models/GiftWrap"));

var _Elf = _interopRequireDefault(require("./src/models/Elf"));

var _ConveyorBelt = _interopRequireDefault(require("./src/models/ConveyorBelt"));

var _Table = _interopRequireDefault(require("./src/models/Table"));

var _DBHeroes = _interopRequireDefault(require("./src/constants/DBHeroes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log("\n||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n\n                         ###   RUSH EFREI KLAUS   ###\n\n||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\n");
var littlePony = new _Pony["default"]();
var redPony = new _Pony["default"]();
var myBejita = new _DragonBall["default"](_DBHeroes["default"].bejita);
var box = new _Box["default"]();
var paper = new _GiftWrap["default"]();
var legolas = new _Elf["default"]('Legolas');
var tapis = new _ConveyorBelt["default"]();
var table = new _Table["default"]();
console.log("###### STEP N.1 ######\n");
littlePony.isMoved();
myBejita.isMoved();
console.log("###### STEP N.2 ######\n");
legolas.pack(box, myBejita);
box.open();
legolas.pack(box, myBejita);
console.log('\n');
legolas.pack(paper, redPony);
legolas.pack(paper, redPony);
console.log('\n');
legolas.unpack(paper);
legolas.unpack(paper);
console.log('\n');
console.log("###### STEP N.3 ######\n");
legolas.put(littlePony, table);
legolas.put(myBejita, table);
legolas.look(table);
console.log('\n');
legolas.take(0, table);
legolas.look(table);
console.log('\n');
legolas.put(littlePony, tapis);
legolas.put(myBejita, tapis);
legolas.look(tapis);
console.log('\n');
legolas.take(littlePony, tapis);
legolas.look(tapis);
console.log('\n');
legolas["in"](tapis);
legolas.look(tapis);
console.log('\n');
legolas.out(tapis);
legolas.look(tapis);
console.log('\n');