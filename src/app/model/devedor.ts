import { Divida } from "./divida";

export class Devedor {
  id!: string;
  tipodepessoa!: string;
  nomeourazaosocial?: string;
  cpfoucnpj!: string;
  totaldividas!: number;
  qtddividas!: number;
  statusdividas!: boolean;
  dividas: Divida[];
  constructor(id: string, tipodepessoa: string, nomeourazaosocial: string, cpfoucnpj: string, totaldividas: number, qtddividas: number, statusdividas: boolean) {
    //this.id = String(Math.round(Math.random() * 1000));
    this.id = id;
    this.tipodepessoa = tipodepessoa;
    this.nomeourazaosocial = nomeourazaosocial;
    this.cpfoucnpj = cpfoucnpj;
    this.totaldividas = totaldividas;
    this.qtddividas = qtddividas;
    this.statusdividas = statusdividas;
    this.dividas = [];
  }
}
