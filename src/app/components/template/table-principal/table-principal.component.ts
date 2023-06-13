import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Devedor } from 'src/app/model/devedor';

@Component({
  selector: 'app-table-principal',
  templateUrl: './table-principal.component.html',
  styleUrls: ['./table-principal.component.css'],
})
export class TablePrincipalComponent {
  @Input() devedores: Devedor[] = [];

  constructor() {}

  ngOnInit(): void {
  }

  onClickItem() {
    //this.router.navigate(['/extrato/detalhes', t?.id]);
    //this.router.navigate(['/extrato/detalhes', { id: t?.id }]);
  }
}
