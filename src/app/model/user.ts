import { Devedor } from "./devedor";

export class User {
  id!: string;
  devedores: Devedor[];
  constructor() {
    this.id = String(Math.round(Math.random() * 1000));
    this.devedores = [];
  }

  public static clone(user: User) {
    let u: User = new User();
    u.devedores = user.devedores;
    return u;
  }

}
