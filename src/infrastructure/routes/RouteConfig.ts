// import { LoginUserUseCase } from "@/domain/useCases/LoginUserUseCase";
import { IRoute } from "../interface/IRoute";
import { LoginController } from "../controllers/LoginController";
import { IHttpServer } from "../interface/IHttpServer";
import { HealthCheckController } from "../controllers/HealthCheckController";
// import { AuthenticationMiddleware } from "../middlewares/AuthenticationMiddleware";
import { IUseCaseContainer } from "../interface/IUseCaseContainer";

class RouteConfig {
  // private static commonMiddlewares = {

  //   auth: new AuthenticationMiddleware(),

  // };
  static setup(server: IHttpServer, useCases: IUseCaseContainer): void {
    const routes: IRoute[] = [
      {
        method: 'GET',
        path: '/health',
        controller: new HealthCheckController(),
        isPublic: true
      },
      {
        method: 'POST',
        path: '/login',
        controller: new LoginController(useCases.loginUserUseCase),
        isPublic: true
      },
    ];

    routes.forEach(route => {
      server.register(route.method, route.path, route.controller, route.middlewares);
    });
  }
}

export { RouteConfig }
