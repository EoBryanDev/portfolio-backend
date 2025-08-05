import { TRoles } from "../types/TRoles";

interface IToken {
  generate(payload: { userId: string, role: TRoles }, expiration: unknown): string;
}

export { IToken }
