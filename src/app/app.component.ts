import { Component } from '@angular/core';
import { User } from './model/user';
import { AdicionarService } from './components/template/form-adicionar/form-adicionar.service';
import { Divida } from './model/divida';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Controle de Devedores';
  user!: User;
  dividas: Divida[] = [];

  constructor(private adicionarService: AdicionarService) {}

  ngOnInit(): void {
    this.user = new User();
    this.user.totalemprestado = 0;

    // this.adicionarService.totalDividas().subscribe(
    //   (data: Divida[]) => {
    //     this.dividas = data;
    //   },
    //   (error) => {
    //     console.log('componente');
    //     console.log(error);
    //     alert(error.message);
    //   }
    // );
    // alert(this.user.totalemprestado);
  }
}
