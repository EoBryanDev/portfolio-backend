import { randomUUID } from "node:crypto";
import { IId } from "../interfaces/IUser";

class CryptoUUID implements IId {
  generate(): string {
    return randomUUID();
  }
}

export { CryptoUUID }
