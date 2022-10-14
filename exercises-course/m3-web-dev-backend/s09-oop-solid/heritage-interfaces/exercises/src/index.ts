import Student from "./entities/Student";

const date = new Date('07/01/1988')

const student1 = new Student(1, 'Felipe', date, [7, 7, 7], [7, 7, 7]);
const student2 = new Student(2, 'Janine', date, [9, 7, 9], [9, 10, 7]);
const student3 = new Student(3, 'Fatima', date, [8, 10, 8], [10, 7, 8]);
const student4 = new Student(4, 'Lais', date, [10, 10, 10], [9, 9, 10]);
const student5 = new Student(5, 'Mae', date, [10, 10, 10], [10, 10, 10]);
