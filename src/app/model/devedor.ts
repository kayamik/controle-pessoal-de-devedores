import { Divida } from './divida';

export class Devedor {
  id!: string;
  tipodepessoa!: string;
  nomeourazaosocial: string;
  cpfoucnpj!: string;
  totaldividas: number;
  qtddividas: number;
  statusdividas: boolean;
  dividas: Divida[];

  constructor(
    tipodepessoa: string,
    nomeourazaosocial: string,
    cpfoucnpj: string
  ) {
    this.id = String(Math.round(Math.random() * 1000));
    this.tipodepessoa = tipodepessoa;
    this.nomeourazaosocial = nomeourazaosocial;
    this.cpfoucnpj = cpfoucnpj;
    this.totaldividas = 0;
    this.qtddividas = 0;
    this.statusdividas = false;
    this.dividas = [];
  }

  public clone(devedor: Devedor) {
    let d: Devedor = new Devedor(
      devedor.tipodepessoa,
      devedor.nomeourazaosocial,
      devedor.cpfoucnpj
    );
    d.tipodepessoa = devedor.tipodepessoa;
    d.nomeourazaosocial = devedor.nomeourazaosocial;
    d.cpfoucnpj = devedor.cpfoucnpj;
    d.totaldividas = devedor.totaldividas;
    d.qtddividas = devedor.qtddividas;
    d.statusdividas = devedor.statusdividas;
    d.dividas = devedor.dividas;
    return d;
  }
}
