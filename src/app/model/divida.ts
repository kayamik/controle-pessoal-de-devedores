export class Divida {
  id!: string;
  valordoemprestimo?: number;
  datadoemprestimo?: Date;
  datadadevolucao?: Date;
  quitado?: boolean;
  tipodepagamento?: string;
  constructor(valordoemprestimo: number, datadoemprestimo: Date, datadadevolucao: Date, quitado: boolean = false, tipodepagamento: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.valordoemprestimo = valordoemprestimo;
    this.datadoemprestimo = datadoemprestimo;
    this.datadadevolucao = datadadevolucao;
    this.quitado = quitado;
    this.tipodepagamento = tipodepagamento;
  }
}
