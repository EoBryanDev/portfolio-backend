import { IController, IHttpRequest, IHttpServer, IMiddleware } from "../interface/IHttpServer";
import { THTTPMethods } from "../types/THttpMethods";

class ExpressAdapter implements IHttpServer {
  private app: any;

  constructor() {
    const express = require('express');
    this.app = express();
    this.app.use(express.json());
  }

  register(method: THTTPMethods, path: string, controller: IController, middlewares?: IMiddleware[]): void {
    const handler = async (req: any, res: any) => {
      let httpRequest: IHttpRequest = {
        body: req.body,
        params: req.params,
        query: req.query,
        headers: req.headers,
        method: req.method,
        url: req.url,
        context: {}
      };

      // Executa middlewares em sequência
      if (middlewares) {
        for (const middleware of middlewares) {
          const result = await middleware.handle(httpRequest);

          if (!result.success) {
            return res.status(result.error!.statusCode).json(result.error!.body);
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
          res.set(key, value);
        });
      }

      res.status(httpResponse.statusCode).json(httpResponse.body);
    };

    switch (method.toLowerCase()) {
      case 'get':
        this.app.get(path, handler);
        break;
      case 'post':
        this.app.post(path, handler);
        break;
      case 'put':
        this.app.put(path, handler);
        break;
      case 'delete':
        this.app.delete(path, handler);
        break;
    }
  }

  async listen(port: number): Promise<void> {
    return new Promise((resolve) => {
      this.app.listen(port, () => {
        console.log(`Express server running on port ${port}`);
        resolve();
      });
    });
  }
}
export { ExpressAdapter };
