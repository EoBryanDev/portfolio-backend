import { IHttpServer } from "../interface/IHttpServer";
import { TFramework } from "../types/TFramework";
import { FastifyAdapter } from "./FastifyAdapter";

class HttpServerFactory {
  static create(type: TFramework): IHttpServer {
    switch (type) {
      // case 'express':
      //   return new ExpressAdapter();
      case 'fastify':
        return new FastifyAdapter();
      default:
        throw new Error(`Framework ${type} not supported`);
    }
  }
}

export { HttpServerFactory };
