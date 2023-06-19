import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Devedor } from 'src/app/model/devedor';
import { CadastrarStorageService } from './form-cadastrar.service';
import { Shared } from 'src/app/util/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-cadastrar',
  templateUrl: './form-cadastrar.component.html',
  styleUrls: ['./form-cadastrar.component.css'],
})
export class FormCadastrarComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  devedor!: Devedor;
  devedores: Devedor[] = [];
  nometemp!: string;

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(
    private cadastrarService: CadastrarStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.devedor = new Devedor('', '', '');
    this.devedores = this.cadastrarService.getUsers();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.cadastrarService.isExist(this.devedor.nomeourazaosocial)) {
      this.cadastrarService.save(this.devedor);
    } else {
      this.cadastrarService.update(this.devedor);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Devedor adicionado com sucesso';

    this.nometemp = this.devedor.nomeourazaosocial;

    this.form.reset();
    this.devedor = new Devedor('', '', '');

    this.devedores = this.cadastrarService.getUsers();
  }

  onReset() {
    this.devedor = new Devedor('', '', '');
    this.form.reset();
  }

  onEdit(devedor: Devedor) {
    //this.devedor = devedor;
    let clone = devedor.clone(devedor);
    this.devedor = clone;
  }

  onDelete(nomeourazaosocial: string) {
    let confirmation = window.confirm(
      'Deseja realmente excluir o devedor ' + nomeourazaosocial
    );
    if (!confirmation) {
      return;
    }
    let response: boolean = this.cadastrarService.delete(nomeourazaosocial);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'Excluido com sucesso!';
    } else {
      this.message = 'O devedor não pode ser removido!';
    }
    this.devedores = this.cadastrarService.getUsers();
  }

  onDividas() {
    this.router.navigate(['adicionar', this.devedor?.id]);
  }
}

// devedor!: Devedor;
// devedores: Devedor [] = [];
// tipodepessoa: string = '';
// nomeourazaosocial: string = '';
// cpfoucnpj: string = '';

// constructor( private router: Router ) {}

// ngOnInit(): void {
// }

// onSubmit() {
//   this.devedor = new Devedor (this.tipodepessoa, this.nomeourazaosocial, this.cpfoucnpj, 0, 0, false);
//   //Verificar se já existe para não ocorrer erro, corrigir depois
//   this.devedores = JSON.parse(localStorage.getItem('lista-devedores') || '{}');
//   this.devedores.push(this.devedor);
//   localStorage.setItem('lista-devedores', JSON.stringify(this.devedores));
// }

// onReset() {
//   window.alert('Limpar!');
// }

// onDividas() {
//   this.router.navigate(['adicionar', this.devedor?.id]);
// }
