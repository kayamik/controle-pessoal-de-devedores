import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Devedor } from 'src/app/model/devedor';

@Component({
  selector: 'app-table-principal',
  templateUrl: './table-principal.component.html',
  styleUrls: ['./table-principal.component.css'],
})
export class TablePrincipalComponent {
  devedor!: Devedor;
  devedores: Devedor[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.devedores = JSON.parse(localStorage.getItem('devedores') || '{}');
  }

  onCadastro(devedor: Devedor) {
    this.router.navigate(['resultado', devedor?.id]);
  }
}
