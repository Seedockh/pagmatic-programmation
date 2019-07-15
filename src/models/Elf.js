class Elf {

  #nickname;

  constructor(nickname) {
    this.#nickname = nickname;
  }

  setNickname(nickname) {
    this.#nickname = nickname;
  }

  getNickname() {
    return this.#nickname;
  }

  pack(packaging, toy) {
    if (packaging.constructor.name==='Box' && !packaging.getIsOpen()) {
        console.log('Sorry, this package is not opened ! :(');
    } else if (packaging.getToy()) {
        console.log('Sorry, this package is already filled ! :(');
    } else {
        packaging.insert(toy);
        console.log(`Yeaaaah! Just packing the toy ~~ ${toy.getType()} ~~`);
    }
  }

  unpack(packaging) {
    if (packaging.getIsOpen() || !packaging.getToy()) {
      console.log('Sorry, this package is already empty ! :(');
      return packaging.getToy();
    } else {
      const toy = packaging.getToy();
      packaging.setToy(null);
      console.log(`Ooooooh! Just unpacking the toy ~~ ${toy.getType()} ~~`);
      return toy;
    }
  }

  log() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `[${hours}:${minutes}:${seconds}]`;
  }

  put(obj, furniture) {
    console.log(`${this.log()} ${this.#nickname} is putting a ${obj.constructor.name} on the ${furniture.constructor.name}`);
    return furniture.put(obj);
  }

  take(obj, furniture) {
    console.log(`${this.log()} ${this.#nickname} is removing an object from the ${furniture.constructor.name}`);
    return furniture.take();
  }

  in(conveyorBelt) {
    console.log(`${this.log()} ${this.#nickname} has pushed IN button.`);
    return conveyorBelt.inButton(this);
  }

  out(conveyorBelt) {
    console.log(`${this.log()} * PWOOF! *${this.#nickname} has sent some magic to Sannnta ! ='D`);
    return conveyorBelt.outButton();
  }

  look(furniture) {
    return console.log(furniture.getObjects());
  }
}

export default Elf;
