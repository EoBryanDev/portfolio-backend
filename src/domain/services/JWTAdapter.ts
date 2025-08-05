import jwt, { SignOptions } from 'jsonwebtoken'
import { IToken } from "../interfaces/IToken";
import { TRoles } from "../types/TRoles";
import { env } from '../../../env';

class JWTAdapter implements IToken {
  generate(payload: { userId: string, role: TRoles }, expiration: SignOptions['expiresIn']): string {
    return jwt.sign(payload, env.SECRET_KEY, { expiresIn: expiration })
  }

}

export { JWTAdapter }
