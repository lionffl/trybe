import Employee from "./Employee";


export default class Teacher extends Employee{
  registration: number;
  salary: number;
  admissionDate: Date;
  subject: string;
  
  constructor(name: string, birthDate: Date, registration: number, salary: number, admissionDate: Date, subject: string) {
    super(registration, salary, name, birthDate, admissionDate);
    this.registration = registration;
    this.admissionDate = admissionDate;
    this.salary = salary;
    this.subject = subject;
  }
  
  generateRegistration(): string {
    return this.registration.toString();
  }

}