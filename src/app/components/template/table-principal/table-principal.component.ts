import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Devedor } from 'src/app/model/devedor';
import { Divida } from 'src/app/model/divida';
import { User } from 'src/app/model/user';
import { AdicionarService } from '../form-adicionar/form-adicionar.service';

@Component({
  selector: 'app-table-principal',
  templateUrl: './table-principal.component.html',
  styleUrls: ['./table-principal.component.css'],
})
export class TablePrincipalComponent {
  devedor!: Devedor;
  devedores: Devedor[] = [];
  user!: User;
  dividas: Divida[] = [];

  constructor(
    private router: Router,
    private adicionarService: AdicionarService
  ) {}

  ngOnInit(): void {
    this.devedores = JSON.parse(localStorage.getItem('devedores') || '{}');
    setTimeout(() => {
      this.user = new User();
      this.adicionarService.totalDividas().subscribe(
        (data: Divida[]) => {
          this.dividas = data;
          this.user.valortotalpendente = this.dividas
            .filter((a) => a.quitado == false)
            .filter((a) => a.valordoemprestimo)
            .reduce((sum, current) => sum + current.valordoemprestimo, 0);
          this.user.totalemprestado = this.dividas
            .filter((a) => a.valordoemprestimo)
            .reduce((sum, current) => sum + current.valordoemprestimo, 0);
          this.user.qtddividasativas = this.dividas.filter(
            (a) => a.quitado == false
          ).length;
        },
        () => {}
      );
    }, 3000);
  }

  onCadastro(devedor: Devedor) {
    this.router.navigate(['resultado', devedor?.id]);
  }
}
