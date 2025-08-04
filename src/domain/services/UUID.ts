import { randomUUID } from "node:crypto";
import { IId } from "../interfaces/IUser";

class UUID implements IId {
  public id
  constructor() {
    this.id = randomUUID()
  }
}

export { UUID }
