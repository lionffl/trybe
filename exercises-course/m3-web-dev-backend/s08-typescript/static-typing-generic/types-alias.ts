type Bird = {
  specie: string,
  height: number,
  weight: number,
}

type Sum = (a: number, b: number) => number;

type Address = {
  street: string,
  number: number,
  code: string,
  city: string,
  state: string,
}

type DocumentId = number | string;

type Linux = 'linux';
type Windows = 'windows';
type Mac = 'mac';

type OS = Linux | Windows | Mac;