import { Component, OnInit } from '@angular/core';
import { Devedor } from 'src/app/model/devedor';

@Component({
  selector: 'app-form-cadastrar',
  templateUrl: './form-cadastrar.component.html',
  styleUrls: ['./form-cadastrar.component.css'],
})
export class FormCadastrarComponent implements OnInit{
  devedor!: Devedor;

  constructor(
  ) {}

  ngOnInit(): void {
    this.devedor = new Devedor('', '', '', '', 0, 0, false);
  }

  onSubmit() {
  }

  onReset() {
    window.alert('Limpar!');
  }

}
