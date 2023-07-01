import { Component, OnInit, ViewChild } from '@angular/core';

import { Divida } from 'src/app/model/divida';
import { NgForm } from '@angular/forms';
import { AdicionarService } from './form-adicionar.service';
import { Shared } from 'src/app/util/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { Devedor } from 'src/app/model/devedor';
import { CadastrarStorageService } from '../form-cadastrar/form-cadastrar.service';

@Component({
  selector: 'app-form-adicionar',
  templateUrl: './form-adicionar.component.html',
  styleUrls: ['./form-adicionar.component.css'],
})
export class FormAdicionarComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  divida!: Divida;
  dividas: Divida[] = [];
  devedor!: Devedor;
  devedores: Devedor[] = [];
  sucess: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adicionarService: AdicionarService,
    private cadastrarService: CadastrarStorageService
  ) {
    this.divida = new Divida(0, new Date(), new Date(), false, '');
    this.devedor = new Devedor('', '', '');
  }

  ngOnInit(): void {
    Shared.initializeWebStorage();
    this.devedores = JSON.parse(localStorage.getItem('devedores') || '{}');
    let idParam: string = this.route.snapshot.paramMap.get('id')!;
    this.devedores = this.devedores.filter((t) => {
      return t.id === idParam;
    });
    this.devedor = this.devedores[0];
    this.divida.devedorId = this.devedor.id;
  }

  onAtualizar() {
    this.devedor.qtddividas++;
    if (!this.divida.quitado == false) {
      this.devedor.totaldividas =
        this.devedor.totaldividas + this.divida.valordoemprestimo;
    }
    this.cadastrarService.update(this.devedor);
  }

  onSubmit() {
    this.adicionarService.save(this.divida).subscribe(
      (data: Divida) => {
        this.divida = data;
        console.log(this.divida);
        setTimeout(() => {
          this.onDados();
        }, 1000);
        this.onAtualizar();
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
    window.history.back();
  }

  onReset() {
    this.onDados();
    this.form.reset();
  }

  onDados() {
    this.adicionarService.totalDividas().subscribe(
      (data: Divida[]) => {
        this.devedor.qtddividas = data.filter(
          (a) => a.devedorId === this.divida.devedorId
        ).length;
        this.devedor.totaldividas = data
          .filter((a) => a.devedorId === this.divida.devedorId)
          .filter((a) => a.quitado == false)
          .filter((a) => a.valordoemprestimo)
          .reduce((sum, current) => sum + current.valordoemprestimo, 0);
        if (
          data
            .filter((a) => a.quitado == false)
            .filter((a) => a.devedorId === this.divida.devedorId).length > 0
        ) {
          this.devedor.statusdividas = false;
        } else {
          this.devedor.statusdividas = true;
        }
        this.cadastrarService.update(this.devedor);
      },
      (error) => {
        console.log('componente');
        console.log(error);
        alert(error.message);
      }
    );
  }
}
