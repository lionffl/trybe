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

export default class Person {
  private _name: string = '';
  private _birthDate: Date = new Date();

  constructor(name: string, birthDate: Date) {
    this._birthDate = birthDate;
    this._name = name;
  }

  private getAge(birthDate: Date): Error | number {
    const today = new Date();
    const bDate = new Date(birthDate);
    const age = today.getFullYear() - bDate.getFullYear()
    const monthCheck = today.getMonth() - bDate.getMonth(); 
  
    const isFuture = today.valueOf() < bDate.valueOf()
    if (isFuture) throw new Error('Birthdate is in the future.');
    if (monthCheck >= 0 && bDate.getDate() >= today.getDate()) return age
    else return age - 1
  }

  get name() {
    return this._name;
  }

  get birthDate() {
    return this._birthDate;
  }

  set name(name: string) {
    if (name.length < 3) throw new Error('Name must contain at least 3 characteres.');
    else this._name = name;
  }

  set birthDate(birthDate: Date) {
    const age = this.getAge(birthDate);
    if (age > 120) throw new Error('You are 120 years old.');
    else this._birthDate = birthDate; 
  }
}