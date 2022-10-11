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
