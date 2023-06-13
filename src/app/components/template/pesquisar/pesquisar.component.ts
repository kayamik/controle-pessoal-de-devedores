import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Devedor } from 'src/app/model/devedor';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent {
  devedor!: Devedor;
  id!: string;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.devedor = new Devedor (this.id, '', '', '', 0, 0, false)
    this.router.navigate(['resultado', this.devedor?.id]);
  }
}

