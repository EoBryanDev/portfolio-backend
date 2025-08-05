import { create } from "domain";
import { IToken } from "../interfaces/IToken";
import { IUserRepository } from "../repositories/IUserRepository";

class LoginUserUseCase {
  constructor(private userRepository: IUserRepository, private tokenGenerator: IToken) { }

  public async execute(loginPayload: any) {
    const user = await this.userRepository.findByEmail(loginPayload.email)
    if (!user) {
      throw new Error("User not exist!");
    }

    if (user.getUserDetails().email != loginPayload.email || user.getUserDetails().password != loginPayload.password) {
      throw new Error("Credentials are invalid!");
    }
    const payload = {
      userId: user.getUserDetails().id,
      role: user.getUserDetails().role
    }
    const access_token = this.tokenGenerator.generate(payload, 3600);

    return { access_token, expires_in: 3600, token_type: 'Bearer' };

  }
}

export { LoginUserUseCase }
