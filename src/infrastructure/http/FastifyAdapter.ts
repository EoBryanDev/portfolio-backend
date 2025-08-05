import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { IController, IHttpRequest, IHttpServer, IMiddleware } from "../interface/IHttpServer";
import { THTTPMethods } from "../types/THttpMethods";

class FastifyAdapter implements IHttpServer {
  private app: any;

  constructor() {
    this.app = fastify({ logger: true });
  }

  register(method: THTTPMethods, path: string, controller: IController, middlewares?: IMiddleware[]): void {

    const handler = async (request: any, reply: FastifyReply) => {
      const httpRequest: IHttpRequest = {
        body: request.body,
        params: request.params,
        query: request.query,
        headers: request.headers,
        method: request.method,
        url: request.url,
        context: {}
      };

      if (middlewares) {
        for (const middleware of middlewares) {
          const result = await middleware.handle(httpRequest);

          if (!result.success) {
            return reply.status(result.error!.statusCode).send(result.error!.body);
          }

          // Adiciona dados do middleware ao contexto
          if (result.data) {
            Object.assign(httpRequest.context!, result.data);

            // Se tem dados de usuário, adiciona diretamente ao request
            if (result.data.user) {
              httpRequest.user = result.data.user;
            }
          }
        }
      }

      const httpResponse = await controller.handle(httpRequest);

      if (httpResponse.headers) {
        Object.entries(httpResponse.headers).forEach(([key, value]) => {
          reply.header(key, value);
        });
      }

      reply.status(httpResponse.statusCode).send(httpResponse.body);
    };

    this.app.route({
      method: method.toUpperCase(),
      url: path,
      handler
    });
  }

  async listen(port: number): Promise<void> {
    try {
      await this.app.listen({ port });
      console.log(`Fastify server running on port ${port}`);
    } catch (err) {
      this.app.log.error(err);
      process.exit(1);
    }
  }
}

export { FastifyAdapter };
