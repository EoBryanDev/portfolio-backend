import { randomUUID } from "node:crypto";
import { Id } from "../interfaces/Id";

class CryptoUUIDAdapter extends Id {
  protected id: string = "";
  constructor() {
    super();
    this.generate();
  }

  protected generate(): void {
    this.id = randomUUID();
  };

  public getId(): string {
    return this.id
  };


}

export { CryptoUUIDAdapter }
