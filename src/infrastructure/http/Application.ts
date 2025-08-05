import { LoginUserUseCase } from "@/domain/useCases/LoginUserUseCase";
import { RouteConfig } from "../routes/RouteConfig";
import { IHttpServer } from "../interface/IHttpServer";
import { HttpServerFactory } from "./HttpServerFactory";
import { TFramework } from "../types/TFramework";
import { InMemoryUserRepository } from "../database/InMemoryDatabase";
import { JWTAdapter } from "@/domain/services/JWTAdapter";
import { IUseCaseContainer } from "../interface/IUseCaseContainer";
import { User } from "@/domain/entities/User";
import { CryptoUUIDAdapter } from "@/domain/services/CryptoUUIDAdapter";

const mock = {
  firstName: 'admin',
  lastName: 'test 2',
  password: '1234',
  email: 'teste@teste.com',
  birthDate: '1998-01-29'
}
const user = new User(mock, new CryptoUUIDAdapter())

class Application {
  private server: IHttpServer;
  private useCases: IUseCaseContainer;

  constructor(frameworkType: TFramework) {
    this.server = HttpServerFactory.create(frameworkType);
    this.useCases = {
      loginUserUseCase: new LoginUserUseCase(
        new InMemoryUserRepository([user]),
        new JWTAdapter()
      ),
    }

    this.setupRoutes();
  }

  private setupRoutes(): void {
    RouteConfig.setup(this.server, this.useCases);
  }

  async start(port: number = 3000): Promise<void> {
    await this.server.listen(port);
  }
}

export { Application };
