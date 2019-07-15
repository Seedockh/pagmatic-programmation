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
        console.log(`Yeaaaah! Just packing the toy ~~ ${toy.type} ~~`);
    }
  }

  unpack(packaging) {
    if (packaging.getIsOpen() || !packaging.getToy()) {
      console.log('Sorry, this package is already empty ! :(');
      return packaging.getToy();
    } else {
      const toy = packaging.getToy();
      packaging.setToy(null);
      console.log(`Ooooooh! Just unpacking the toy ~~ ${toy.type} ~~`);
      return toy;
    }
  }
}

export default Elf;
