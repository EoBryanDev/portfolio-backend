import { IToken } from "../interfaces/IToken";

class JWTAdapter implements IToken {
  generate(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  isValidToken(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

}

export { JWTAdapter }
