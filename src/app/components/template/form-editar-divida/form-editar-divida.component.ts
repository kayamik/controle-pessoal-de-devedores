import { Component, OnInit, ViewChild } from '@angular/core';

import { Divida } from 'src/app/model/divida';
import { NgForm } from '@angular/forms';
import { Shared } from 'src/app/util/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { Devedor } from 'src/app/model/devedor';
import { AdicionarService } from '../form-adicionar/form-adicionar.service';
import { CadastrarStorageService } from '../form-cadastrar/form-cadastrar.service';

@Component({
  selector: 'app-form-editar-divida',
  templateUrl: './form-editar-divida.component.html',
  styleUrls: ['./form-editar-divida.component.css'],
})
export class FormEditarDividaComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  divida!: Divida;
  dividas: Divida[] = [];
  devedor!: Devedor;
  devedores: Devedor[] = [];
  iddivida: string = '';
  valorantigo!: number;

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
    let idParam: string = this.route.snapshot.paramMap.get('id')!;
    this.iddivida = idParam;
    setTimeout(() => {
      this.onObterDivida(idParam);
    }, 3000);
  }

  onSubmit() {
    this.adicionarService.update(this.divida).subscribe(
      (data: Divida) => {
        this.divida = data;
        console.log(this.divida);
        setTimeout(() => {
          this.onObterIdDevedor();
        }, 3000);
      },
      (error) => {
        console.log('componente');
        console.log(error);
        alert(error.message);
      }
    );
    this.router.navigate(['resultado', this.divida?.devedorId]);
  }

  onObterIdDevedor() {
    this.adicionarService.getByIdDivida(this.iddivida).subscribe(
      (data: Divida[]) => {
        let dividatemp: string = data[0].devedorId;
        this.devedores = JSON.parse(localStorage.getItem('devedores') || '{}');
        this.devedores = this.devedores.filter((t) => {
          return t.id === dividatemp;
        });
        this.devedor = this.devedores[0];
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
  }

  onObterDivida(id: string) {
    this.adicionarService.obterDivida(id).subscribe(
      (data: Divida) => {
        this.divida = data;
        this.valorantigo = this.divida.valordoemprestimo;
      },
      (error) => {
        console.log('componente');
        console.log(error);
        alert(error.message);
      }
    );
  }

  onVoltar() {
    this.onDados();
    window.history.back();
  }

  onAtualizar() {
    this.devedor.totaldividas = this.devedor.totaldividas - this.valorantigo;
    if (this.divida.quitado === false) {
      this.devedor.totaldividas =
      this.devedor.totaldividas + this.divida.valordoemprestimo;
    }
    this.cadastrarService.delete(this.devedor.id);
    this.cadastrarService.save(this.devedor);
  }

  onDados() {
    this.adicionarService.totalDividas().subscribe(
      (data: Divida[]) => {
        this.devedores = JSON.parse(localStorage.getItem('devedores') || '{}');
        this.devedores = this.devedores.filter((t) => {
          return t.id === this.devedor.id;
        });
        this.devedor = this.devedores[0];
        this.devedor.qtddividas = data.filter(
          (a) => a.devedorId === this.divida.devedorId
        ).length;
        this.devedor.totaldividas = data
          .filter((a) => a.devedorId === this.divida.devedorId)
          .filter((a) => a.quitado == false)
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
        this.cadastrarService.delete(this.devedor.id);
        this.cadastrarService.save(this.devedor);
      },
      (error) => {
        console.log('componente');
        console.log(error);
        alert(error.message);
      }
    );
  }
}
