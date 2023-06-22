import { Injectable } from '@angular/core';
import { Divida } from 'src/app/model/divida';
import { FormAdicionarPromiseService } from './form-adicionar-promise.service';
import { Devedor } from 'src/app/model/devedor';

@Injectable({
  providedIn: 'root',
})
export class AdicionarService {
  dividas: Divida[] = [];
  divida!: Divida;

  constructor(
    private formAdicionarPromiseService: FormAdicionarPromiseService
  ) {}

  save(devedor: Devedor, divida: Divida): Promise<Divida> {
    const d = new Promise<Divida>((resolve, reject) => {
      if (divida.valordoemprestimo < 1) {
        reject('O valor emprestado deve ser maior que R$0,00!');
      } else {
        setTimeout(() => {
          divida.devedorId = devedor.id;
          this.formAdicionarPromiseService.save(divida);
          resolve(divida);
        }, 5000);
      }
    });
    return d;
  }
}
