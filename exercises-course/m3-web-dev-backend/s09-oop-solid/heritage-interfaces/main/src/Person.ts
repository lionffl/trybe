class Person {
  name: string;
  address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}

export class NaturalPerson extends Person {
  cpf: string;

  constructor(cpf: string, name: string, address: string) {
    super(name, address);
    this.cpf = cpf;
  }
}

export class LegalPerson extends Person {
  cnpj: string;

  constructor(cnpj: string, name: string, address: string) {
    super(name, address);
    this.cnpj = cnpj;
  }
}

class Superclass {
  public isSuper: boolean = true;

  sayHello() {}
}

class Subclass extends Superclass {
  constructor() {
    super()
    this.isSuper = false;
  }
  sayHello(): void {
    console.log('hello from subclass')
  }
}

class Subclass2 extends Superclass {
  sayHello(): void {
    console.log('hello from subclass 2')
  }
}

const obj = new Superclass();
const obj2 = new Subclass();
const obj3 = new Subclass2();

function myFunc(obj: Superclass) {
  if (obj.isSuper) {
    console.log('Super!')
  } else { console.log('Sub!') }
}

myFunc(obj);
myFunc(obj2);
myFunc(obj3);

