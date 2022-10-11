import { createVerify } from "crypto";

export default class Student {
  private _matricula: number;
  private _nome: string;
  private _notasProvas: number[];
  private _notasTrabalhos: number[];

  constructor(matricula: number, nome: string, notasProvas: number[], notasTrabalhos: number[]) {
    this._matricula = matricula;
    this._nome = nome;
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