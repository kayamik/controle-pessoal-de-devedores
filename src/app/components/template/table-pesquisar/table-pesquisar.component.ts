import { Component } from '@angular/core';
import { Divida } from 'src/app/model/divida';

@Component({
  selector: 'app-table-pesquisar',
  templateUrl: './table-pesquisar.component.html',
  styleUrls: ['./table-pesquisar.component.css']
})
export class TablePesquisarComponent {
  divida!: Divida;
  dividas!: Divida[];

  constructor() {}

  ngOnInit(): void {
  }

  onClickItem() {
    //this.router.navigate(['/extrato/detalhes', t?.id]);
    //this.router.navigate(['/extrato/detalhes', { id: t?.id }]);
  }
  onSubmit() {

  }

  onEdit(divida: Divida) {

  }

  onDelete(divida: Divida) {

  }
}
