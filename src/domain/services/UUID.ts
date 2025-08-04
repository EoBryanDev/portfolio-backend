import { randomUUID } from "node:crypto";
import { IId } from "../interfaces/RootUser";

class UUID implements IId {
  public id
  constructor() {
    this.id = randomUUID()
  }
}

export { UUID }
