import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Divida } from '../../../model/divida';
import { WebStorageUtil } from '../../../util/web-storage-util';

@Component({
  selector: 'app-form-adicionar',
  templateUrl: './form-adicionar.component.html',
  styleUrls: ['./form-adicionar.component.css']
})
export class FormAdicionarComponent implements OnInit{
  divida!: Divida;

  @Input() valor!: number;
  @Output() valorChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.divida = new Divida(0, new Date(), new Date(), false, 'null');
  }

  onSubmit() {
    alert(this.divida.valordoemprestimo);
    alert(this.divida.datadadevolucao);
    this.onValorChange();
  }

  onValorChange() {
    this.valorChange.emit(this.valor);
  }

}
