// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo três caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

class Person {
  _name: string = '';
  _birthDate: Date = new Date();

  constructor(name: string, birthDate: Date) {
    this._birthDate = birthDate;
    this._name = name;
  }
}
