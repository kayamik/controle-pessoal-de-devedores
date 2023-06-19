export class Divida {
  id!: string;
  valordoemprestimo!: number;
  datadoemprestimo!: Date;
  datadadevolucao!: Date;
  quitado!: boolean;
  tipodepagamento!: string;
  constructor(
    valordoemprestimo: number,
    datadoemprestimo: Date,
    datadadevolucao: Date,
    quitado: boolean = false,
    tipodepagamento: string
  ) {
    this.id = String(Math.round(Math.random() * 1000));
    this.valordoemprestimo = valordoemprestimo;
    this.datadoemprestimo = datadoemprestimo;
    this.datadadevolucao = datadadevolucao;
    this.quitado = quitado;
    this.tipodepagamento = tipodepagamento;
  }

  public clone(divida: Divida) {
    let d: Divida = new Divida(
      divida.valordoemprestimo,
      divida.datadoemprestimo,
      divida.datadadevolucao,
      divida.quitado,
      divida.tipodepagamento,
    );
    d.valordoemprestimo = divida.valordoemprestimo;
    d.datadoemprestimo = divida.datadoemprestimo;
    d.datadadevolucao = divida.datadadevolucao;
    d.datadadevolucao = divida.datadadevolucao;
    d.quitado = divida.quitado;
    d.tipodepagamento = divida.tipodepagamento;
    return d;
  }
}
