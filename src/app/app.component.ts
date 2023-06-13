import { Component } from '@angular/core';
import { Devedor } from './model/devedor';
import { Divida } from './model/divida';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Controle de Devedores';
  devedor!: Devedor;
  divida!: Divida;
  devedores: Devedor[] = [];
  dividas: Divida[] = [];

  //Remover depois
  valorTotal!: number;

  ngOnInit(): void {
    this.devedor = new Devedor ('1', 'Jurídica', 'João', '123', 1231, 5, true)
    this.devedores.push(this.devedor)
    this.devedor = new Devedor ('2', 'Física', 'Maria', '123', 1231, 3, true)
    this.devedores.push(this.devedor)
    this.devedor = new Devedor ('3', 'Jurídica', 'Pedro', '112313', 1, 1, false)
    this.devedores.push(this.devedor)
  }

}
