export class Client implements Client {
  id: number;
  state: string;
  name: string;
  ca: number;
  comment: string;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
