import { Devedor } from '../model/devedor';
import { Constants } from './constants';

export class Shared {
  constructor() {}

  public static initializeWebStorage(): void {
    if (localStorage.getItem(Constants.DEVEDORES_KEY) != null) {
      return;
    }

    let devedor = new Devedor('', Constants.DEVEDORES_KEY, '');

    localStorage.setItem(Constants.DEVEDORES_KEY, JSON.stringify(devedor));
    localStorage.setItem(Constants.DEVEDOR_KEY, JSON.stringify([]));
  }
}
