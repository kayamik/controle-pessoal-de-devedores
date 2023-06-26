import { Component, ViewChild } from '@angular/core';

import { Divida } from 'src/app/model/divida';
import { NgForm } from '@angular/forms';
import { AdicionarService } from './form-adicionar.service';
import { Shared } from 'src/app/util/shared';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
    this.divida.devedorId = this.devedor.id;
  }

  onSubmit() {
    this.adicionarService.save(this.divida).subscribe(
      (data: Divida) => {
        this.divida = data;
        console.log(this.divida);
      },
      (error) => {
        console.log('componente');
        console.log(error);
        alert(error.message);
      }
    );
    this.router.navigate(['resultado', this.divida?.devedorId]);
  }

  onVoltar() {
    window. history. back();
  }

  onReset() {
    this.form.reset();
  }

  onEdit(divida: Divida) {
    this.adicionarService.update(divida).subscribe(
      (data: Divida) => {
        if (!data) {
          alert('Nenhum divida com esta id foi encontrado!');
        }
        console.log(this.divida);
      },
      (error) => {
        console.log('componente');
        console.log(error);
        alert(error.message);
      }
    );
  }
}
