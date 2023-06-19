import { Component, ViewChild } from '@angular/core';

import { Divida } from 'src/app/model/divida';
import { NgForm } from '@angular/forms';
import { AdicionarStorageService } from './form-adicionar.service';
import { Shared } from 'src/app/util/shared';

@Component({
  selector: 'app-form-adicionar',
  templateUrl: './form-adicionar.component.html',
  styleUrls: ['./form-adicionar.component.css'],
})
export class FormAdicionarComponent {
  @ViewChild('form') form!: NgForm;

  divida!: Divida;
  dividas: Divida[] = [];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private adicionarService: AdicionarStorageService) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.divida = new Divida(0, new Date(), new Date(), false, '');
    this.dividas = this.adicionarService.getUsers();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.adicionarService.isExist(this.divida.id)) {
      this.adicionarService.save(this.divida);
    } else {
      this.adicionarService.update(this.divida);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Dívida cadastrada com sucesso';

    this.form.reset();
    this.divida = new Divida(0, new Date(), new Date(), false, '');

    this.dividas = this.adicionarService.getUsers();
  }

  onReset() {
    this.divida = new Divida(0, new Date(), new Date(), false, '');
    this.form.reset();
  }

  onEdit(divida: Divida) {
    //this.divida = Divida;
    let clone = divida.clone(divida);
    this.divida = clone;
  }

  onDelete(id: string) {
    let confirmation = window.confirm(
      'Deseja realmente excluir a divida ' + id
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.adicionarService.delete(id);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'Excluido com sucesso!';
    } else {
      this.message = 'A dívida não pode ser removido!';
    }
    this.dividas = this.adicionarService.getUsers();
  }
}

//   divida!: Divida;
//   dividas: Divida[] = [];
//   devedor!: Devedor;
//   devedores: Devedor[] = [];
//   filtrodevedores: Devedor[] = [];
//   valoremprestimo: number = 0;
//   datadoemprestimo!: Date;
//   datadadevolucao!: Date;
//   quitado: boolean = false;
//   tipodepagamento: string = '';

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit(): void {}

//   onSubmit() {
//     this.divida = new Divida(
//       this.valoremprestimo,
//       this.datadoemprestimo,
//       this.datadadevolucao,
//       this.quitado,
//       this.tipodepagamento
//     );
//     this.filtrodevedores = JSON.parse(
//       localStorage.getItem('lista-devedores') || '{}'
//     );
//     let idParam: string = this.route.snapshot.paramMap.get('id')!;
//     this.filtrodevedores = this.filtrodevedores.filter((t) => {
//       return t.id === idParam;
//     });
//     this.devedor = this.filtrodevedores[0];
//     this.devedor.dividas.push(this.divida);
//     this.devedor.totaldividas = this.devedor.totaldividas + this.valoremprestimo;
//     this.devedores = JSON.parse(
//       localStorage.getItem('lista-devedores') || '{}'
//     );
//     this.devedores = this.devedores.filter((t) => {
//       return t.id !== this.devedor.id;
//     });
//     this.devedores.push(this.devedor);
//     localStorage.setItem('lista-devedores', JSON.stringify(this.devedores));
//   }

//   onReset() {
//     window.alert('Limpar!');
//   }
// }
