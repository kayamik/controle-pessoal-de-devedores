import { Component, ViewChild } from '@angular/core';

import { Divida } from 'src/app/model/divida';
import { NgForm } from '@angular/forms';
import { AdicionarService } from './form-adicionar.service';
import { Shared } from 'src/app/util/shared';
import { ActivatedRoute } from '@angular/router';
import { Devedor } from 'src/app/model/devedor';

@Component({
  selector: 'app-form-adicionar',
  templateUrl: './form-adicionar.component.html',
  styleUrls: ['./form-adicionar.component.css'],
})
export class FormAdicionarComponent {
  @ViewChild('form') form!: NgForm;

  divida!: Divida;
  dividas: Divida[] = [];
  devedor!: Devedor;
  devedores: Devedor[] = [];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;
  saveInvalid: boolean = true;
  time = 0;

  constructor(
    private route: ActivatedRoute,
    private adicionarService: AdicionarService
  ) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.divida = new Divida(0, new Date(), new Date(), false, '');
    this.devedores = JSON.parse(localStorage.getItem('devedores') || '{}');
    let idParam: string = this.route.snapshot.paramMap.get('id')!;
    this.devedores = this.devedores.filter((t) => {
      return t.id === idParam;
    });
    this.devedor = this.devedores[0];
  }

  onSubmit() {
    this.adicionarService
      .save(this.devedor, this.divida)
      .then(() => {
        this.isSuccess = true;
        this.message =
          'Dívida cadastrada com sucesso';
          alert(this.message);
        this.isSubmitted = true;
      })
      .catch((e) => {
        this.saveInvalid = true;
        alert((this.message = e));
      })
      .finally(() => {
        console.log('A operação foi concluída');
      });

      setInterval(() => {
        this.time++;
      }, 1000);

      this.onReset()
  }

  onReset() {
    this.divida = new Divida(0, new Date(), new Date(), false, '');
    this.form.reset();
  }

  onEdit(divida: Divida) {
    //this.divida = Divida;
    // let clone = divida.clone(divida);
    // this.divida = clone;
  }

  onDelete(id: string) {
    let confirmation = window.confirm(
      'Deseja realmente excluir a dívida ' + id
    );
    if (!confirmation) {
      return;
    }
  }
}

