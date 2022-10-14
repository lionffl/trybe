import Person from "./Person";

export default class Student extends Person {
  private _matricula: number;
  private _notasProvas: number[];
  private _notasTrabalhos: number[];

  constructor(matricula: number, name: string, birthDate: Date, notasProvas: number[], notasTrabalhos: number[]) {
    super(name, birthDate);
    this._matricula = matricula;
    this._notasProvas = notasProvas;
    this._notasTrabalhos = notasTrabalhos;
  }

  get sumGrades() {
    return this._notasProvas.reduce((pV, cV) => pV + cV, 0) + this._notasTrabalhos.reduce((pV, cV) => pV + cV, 0);
  }

  get avgGrade() {
    const mediaProvas = (this._notasProvas.reduce((pV, cV) => pV + cV, 0)) / this._notasProvas.length;
    const mediaTrabalhos = (this._notasTrabalhos.reduce((pV, cV) => pV + cV, 0)) / this._notasTrabalhos.length;
    return (mediaProvas + mediaTrabalhos) / 2;
  }
}