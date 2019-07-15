import PackagingAbstract from './PackagingAbstract';

class Packaging extends PackagingAbstract {

  constructor() {
    super();
  }

  open() {
    this.setIsOpen(true);
  }

  insert(toy) {
    this.setToy(toy);
    this.setIsOpen(false);
  }
}

export default Packaging;
