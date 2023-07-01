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
  providers: [CadastrarStorageService],
})
export class FormCadastrarComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  devedor!: Devedor;
  devedortemp!: Devedor;
  devedores: Devedor[] = [];

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
    this.devedortemp = new Devedor('', '', '');
    this.devedores = this.cadastrarService.getDevedores();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.cadastrarService.isExist(this.devedor.id)) {
      this.cadastrarService.save(this.devedor);
    } else {
      this.cadastrarService.update(this.devedor);
    }
    this.isShowMessage = true;
    this.isSuccess = true;
    this.message = 'Devedor adicionado com sucesso';

    this.devedortemp = this.devedor;

    this.form.reset();
    this.devedor = new Devedor('', '', '');

    this.devedores = this.cadastrarService.getDevedores();
  }

  onReset() {
    this.devedor = new Devedor('', '', '');
    this.form.reset();
  }

  onPesquisar() {
    this.router.navigate(['resultado', this.devedortemp?.id]);
  }

  onVoltar() {
    window.history.back();
  }

  onDividas() {
    this.router.navigate(['adicionar', this.devedortemp?.id]);
  }
}
