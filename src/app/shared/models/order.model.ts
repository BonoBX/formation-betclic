import { OrderI } from '../interfaces/order';

export class Order implements OrderI {
  tjmHt = 500;
  nbJours = 1;
  tva = 20;
  state: string;
  typePresta: string;
  client: string;
  comment: string;
  id: number;

  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

  public totalHt(): number {
    return this.tjmHt * this.nbJours;
  }

  public totalTtc(): number {
    return this.totalHt() * (1 + this.tva) / 100;
  }
}
