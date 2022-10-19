import Person from "./Person";

export default class Employee extends Person {
  private _registration: number;
  private _salary: number;
  private _admissionDate: Date;

  constructor(registration: number, salary: number, name: string, birthDate: Date, admissionDate: Date) {
    super(name, birthDate);
    this._registration = registration;
    this._salary = salary;
    this._admissionDate = admissionDate;
  }

  generateRegistration(): string {
    return this._registration.toString();
  };
}