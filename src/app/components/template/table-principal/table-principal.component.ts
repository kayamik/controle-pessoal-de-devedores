import { Component } from '@angular/core';
import { Devedor } from 'src/app/model/devedor';

@Component({
  selector: 'app-table-principal',
  templateUrl: './table-principal.component.html',
  styleUrls: ['./table-principal.component.css'],
})
export class TablePrincipalComponent{
  devedor!: Devedor;
  devedores: Devedor[] = [];

  constructor() {}

  ngOnInit(): void {
    this.devedores = JSON.parse(localStorage.getItem('devedores') || '{}');
  }

}
