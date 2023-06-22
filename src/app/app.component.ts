import { Component } from '@angular/core';
import { User } from './model/user';
import { Devedor } from './model/devedor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Controle de Devedores';
  user!: User;
  devedores: Devedor[] = [];

  ngOnInit(): void {
    this.user = new User();
    this.user.totalemprestado = 0;
  }
}
