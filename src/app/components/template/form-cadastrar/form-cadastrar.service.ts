import { Injectable } from '@angular/core';
import { Devedor } from 'src/app/model/devedor';
import { User } from 'src/app/model/user';
import { Constants } from 'src/app/util/constants';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { UserPromiseService } from 'src/app/services/user-promise.service';

@Injectable({
  providedIn: 'root',
})
export class FormCadastrarService {
  userWs!: User;
  devedor!: Devedor;

  constructor(private userPromiseService: UserPromiseService) {
    this.userWs = WebStorageUtil.get(Constants.USERNAME_KEY);
  }

  do(value: number, nomeourazaosocial: string): Promise<number> {
    const p = new Promise<number>((resolve, reject) => {
      this.userWs = WebStorageUtil.get(Constants.USERNAME_KEY);
      this.devedor = new Devedor('4', 'Física', 'Joao', '1231231', 0, 0, false);
      this.userWs.devedores.push(this.devedor);
    });
    return p;
  }
}
