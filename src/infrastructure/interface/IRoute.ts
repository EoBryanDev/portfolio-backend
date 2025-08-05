import { IController, IMiddleware } from "./IHttpServer";

interface IRoute {
  method: string;
  path: string;
  controller: IController;
  middlewares?: IMiddleware[];
  isPublic?: boolean;
}

export { IRoute }
