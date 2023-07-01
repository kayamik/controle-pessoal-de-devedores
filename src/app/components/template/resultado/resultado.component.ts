import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Devedor } from 'src/app/model/devedor';
import { AdicionarService } from '../form-adicionar/form-adicionar.service';
import { Divida } from 'src/app/model/divida';
import { CadastrarStorageService } from '../form-cadastrar/form-cadastrar.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  @ViewChild('form') form!: NgForm;

  devedor!: Devedor;
  divida!: Divida;
  dividas: Divida[] = [];
  devedores: Devedor[] = [];

  isSubmitted!: boolean;
  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

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
    this.devedores = JSON.parse(localStorage.getItem('devedores') || '{}');
    let idParam: string = this.route.snapshot.paramMap.get('id')!;
    this.devedores = this.devedores.filter((t) => {
      return t.id === idParam;
    });
    if (this.devedores && this.devedores.length > 0) {
      this.devedor = this.devedores[0];
      setTimeout(() => {
        this.onListDividas(this.devedor);
      }, 1000);
    }
    this.devedores = this.cadastrarService.getDevedores();
  }

  onListDividas(devedor: Devedor) {
    this.adicionarService.listDividasByDevedor(devedor.id).subscribe(
      (data: Divida[]) => {
        if (!data || data.length == 0) {
          alert('Nenhum dívida foi encontrada!');
        }
        this.dividas = data;
        console.log(this.divida);
      },
      (error) => {
        console.log('componente');
        console.log(error);
        alert(error.message);
      }
    );
  }

  load() {
    location.reload();
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
    this.message = 'Devedor adicionado com sucesso!';
    this.devedores = this.cadastrarService.getDevedores();
    alert('Atualizado com sucesso!');
    this.load();
  }

  onDeleteDevedor() {
    this.adicionarService.listDividasByDevedor(this.devedor.id).subscribe(
      (data: Divida[]) => {
        this.onAcceptDeleteDevedor();
      },
      (e) => {
        this.router.navigate(['principal']);
        alert(
          'Não foi possível excluir as dívidas, tente remover o devedor mais tarde!'
        );
      }
    );
  }

  onAcceptDeleteDevedor() {
    let confirmation = window.confirm('Deseja realmente excluir o devedor?');
    if (!confirmation) {
      return;
    }
    setTimeout(() => {
      this.onDeleteTodasDividas();
    }, 2000);
    let response: boolean = this.cadastrarService.delete(this.devedor.id);
    this.isShowMessage = true;
    this.isSuccess = response;
    if (response) {
      this.message = 'Excluido com sucesso!';
    } else {
      this.message = 'O devedor não pode ser removido!';
    }
    this.router.navigate(['principal']);
  }

  onEditDivida(divida: Divida) {
    this.router.navigate(['editar', divida?.id]);
  }

  onDeleteTodasDividas() {
    this.dividas.forEach((d) =>
      this.adicionarService.delete(d.id).subscribe((data: Divida) => {})
    );
    return;
  }

  onObterValorDivida(id: string) {
    this.adicionarService.obterDivida(id).subscribe(
      (data: Divida) => {
        let status: boolean = data.quitado;
        console.log(this.divida);
        this.devedor.qtddividas--;
        if (!status) {
          this.devedor.totaldividas =
            this.devedor.totaldividas - data.valordoemprestimo;
          if (this.devedor.totaldividas < 0 || this.devedor.qtddividas < 0) {
            this.devedor.totaldividas = 0;
            this.devedor.qtddividas = 0;
          }
        }
        this.cadastrarService.delete(this.devedor.id);
        this.cadastrarService.save(this.devedor);
        setTimeout(() => {
          this.onDeleteDivida(id);
        }, 1000);
      },
      (error) => {
        console.log('componente');
        console.log(error);
        alert(error.message);
      }
    );
    return;
  }

  onDeleteDivida(id: string) {
    let confirmation = window.confirm('Deseja realmente excluir a dívida?');
    if (confirmation) {
      this.adicionarService.delete(id).subscribe(
        (data: Divida) => {
          if (!data) {
            alert('Nenhum resultado foi encontrado!');
          }
          console.log(this.divida);
          this.ngOnInit();
        },
        (error) => {
          console.log('componente');
          console.log(error);
          alert(error.message);
        }
      );
      return;
    }
  }

  onDividas() {
    this.router.navigate(['adicionar', this.devedor?.id]);
  }
}
