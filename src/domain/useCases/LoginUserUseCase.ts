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

    const getAccessToken = await this.tokenGenerator.generate();

    return getAccessToken;

  }
}

export { LoginUserUseCase }
