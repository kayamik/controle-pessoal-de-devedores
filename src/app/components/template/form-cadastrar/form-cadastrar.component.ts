import { Component, OnInit } from '@angular/core';

import { Devedor } from '../../../model/devedor';
import { WebStorageUtil } from '../../../util/web-storage-util';

@Component({
  selector: 'app-form-cadastrar',
  templateUrl: './form-cadastrar.component.html',
  styleUrls: ['./form-cadastrar.component.css'],
})
export class FormCadastrarComponent implements OnInit{
  devedor!: Devedor;

  constructor() {}

  ngOnInit(): void {
    this.devedor = new Devedor('', '', '');
  }

  onSubmit() {
    alert(this.devedor.nomeourazaosocial);
    alert(this.devedor.tipodepessoa);
  }

  onButtonClickAgain() {
    console.log('Usuário cadastrado com sucesso!');
  }

  onClickResetForm() {
    this.devedor = new Devedor('', '', '');
    window.alert('Limpar!');
  }

}
