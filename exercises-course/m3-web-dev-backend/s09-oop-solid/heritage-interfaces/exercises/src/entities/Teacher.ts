import Person from "./Person";
import IEmployee from "../interfaces/Employee";


export default class Teacher extends Person implements IEmployee {
  registration: number;
  salary: number;
  admissionDate: Date;
  subject: string;
  
  constructor(name: string, birthDate: Date, registration: number, salary: number, admissionDate: Date, subject: string) {
    super(name, birthDate)
    this.registration = registration;
    this.admissionDate = admissionDate;
    this.salary = salary;
    this.subject = subject;
  }
  
  generateRegistration(): string {
    return this.registration.toString();
  }

}