import { Devedor } from './devedor';

export class User {
  id!: string;
  qtddividasativas!: number;
  valortotalpendente!: number;
  qtdprazosexpirados!: number;
  totalemprestado!: number;
  devedores: Devedor[];

  constructor() {
    this.id = '1';
    this.devedores = [];
  }
}
