"use strict";

var _Pony = _interopRequireDefault(require("./models/Pony"));

var _DragonBall = _interopRequireDefault(require("./models/DragonBall"));

var _Box = _interopRequireDefault(require("./models/Box"));

var _GiftWrap = _interopRequireDefault(require("./models/GiftWrap"));

var _Elf = _interopRequireDefault(require("./models/Elf"));

var _ConveyorBelt = _interopRequireDefault(require("./models/ConveyorBelt"));

var _Table = _interopRequireDefault(require("./models/Table"));

var _DBHeroes = _interopRequireDefault(require("./constants/DBHeroes"));

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