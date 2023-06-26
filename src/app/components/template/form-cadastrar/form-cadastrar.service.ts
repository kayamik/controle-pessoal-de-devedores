import { Constants } from 'src/app/util/constants';
import { Injectable } from '@angular/core';
import { WebStorageUtil } from 'src/app/util/web-storage-util';
import { Devedor } from 'src/app/model/devedor';

@Injectable({
  providedIn: 'root',
})
export class CadastrarStorageService {
  devedores!: Devedor[];

  constructor() {
    this.devedores = WebStorageUtil.get(Constants.DEVEDORES_KEY);
  }

  save(devedor: Devedor) {
    this.devedores = WebStorageUtil.get(Constants.DEVEDORES_KEY);
    this.devedores.push(devedor);
    WebStorageUtil.set(Constants.DEVEDORES_KEY, this.devedores);
  }

  update(devedor: Devedor) {
    this.devedores = WebStorageUtil.get(Constants.DEVEDORES_KEY);
    this.delete(devedor.id);
    this.save(devedor);
  }

  delete(id: string): boolean {
    this.devedores = WebStorageUtil.get(Constants.DEVEDORES_KEY);
    this.devedores = this.devedores.filter((d) => {
      return d.id?.valueOf() != id?.valueOf();
    });

    WebStorageUtil.set(Constants.DEVEDORES_KEY, this.devedores);
    return true;
  }

  isExist(value: string): boolean {
    this.devedores = WebStorageUtil.get(Constants.DEVEDORES_KEY);
    for (let d of this.devedores) {
      if (d.id?.valueOf() == value?.valueOf()) {
        return true;
      }
    }
    return false;
  }

  getDevedores(): Devedor[] {
    this.devedores = WebStorageUtil.get(Constants.DEVEDORES_KEY);
    return this.devedores;
  }
}
