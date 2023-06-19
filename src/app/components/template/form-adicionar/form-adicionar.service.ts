import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Divida } from 'src/app/model/divida';

@Injectable({
  providedIn: 'root',
})

export class AdicionarStorageService {
  divida!: Divida;
  dividas!: Divida[];

  constructor() {
    this.dividas = WebStorageUtil.get(Constants.DIVIDAS_KEY);
  }

  save(divida: Divida) {
    this.dividas = WebStorageUtil.get(Constants.DIVIDAS_KEY);
    this.dividas.push(divida);
    WebStorageUtil.set(Constants.DIVIDAS_KEY, this.dividas);
  }

  update(divida: Divida) {
    this.dividas = WebStorageUtil.get(Constants.DIVIDAS_KEY);
    this.delete(divida.id);
    this.save(divida);
  }

  delete(id: string): boolean {
    this.dividas = WebStorageUtil.get(Constants.DIVIDAS_KEY);
    this.dividas = this.dividas.filter((d) => {
      return d.id?.valueOf() != id?.valueOf();
    });

    WebStorageUtil.set(Constants.DIVIDAS_KEY, this.dividas);
    return true;
  }

  isExist(value: string): boolean {
    this.dividas = WebStorageUtil.get(Constants.DIVIDAS_KEY);
    for (let d of this.dividas) {
      if (d.id?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getUsers(): Divida[] {
    this.dividas = WebStorageUtil.get(Constants.DIVIDAS_KEY);
    return this.dividas;
  }

}
