interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  myNumber: number;

  constructor(number: number) {
    this.myNumber = number;
  }
  myFunc(myParam: number): string {
    return (this.myNumber + myParam).toString();
  }
}

const obj = new MyClass(5);

const result = obj.myFunc(4);

console.log(result);