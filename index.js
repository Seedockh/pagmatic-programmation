import Toy from './src/models/Toy';
import Pony from './src/models/Pony';
import Figurine from './src/models/Figurine';
import DragonBall from './src/models/DragonBall';
import Packaging from './src/models/Packaging';
import Box from './src/models/Box';
import GiftWrap from './src/models/GiftWrap';
import Elf from './src/models/Elf';
import DBHeroes from './src/constants/DBHeroes';

console.log(`
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

                         ###   RUSH EFREI KLAUS   ###

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
`);
const littlePony = new Pony('My little pony');
const redPony = new Pony('Red pony');
const purplePony = new Pony('Purple pony');
const myBejita = new DragonBall(DBHeroes.bejita);
const myKamesennin = new DragonBall(DBHeroes.kamesennin)
const box = new Box();
const paper = new GiftWrap();
const zelda = new Elf('Zelda');

console.log(`###### STEP N.1 ######`);
littlePony.isMoved();
myBejita.isMoved();

console.log(`###### STEP N.2 ######`);
zelda.pack(box,myBejita);
box.open();
zelda.pack(box,myBejita);

zelda.pack(paper,redPony);
zelda.pack(paper,redPony);

zelda.unpack(paper);
zelda.unpack(paper);
