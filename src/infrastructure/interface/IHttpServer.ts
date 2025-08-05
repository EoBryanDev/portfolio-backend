interface IHttpServer {
  register(method: string, path: string, controller: IController, middlewares?: IMiddleware[]): void;
  listen(port: number): Promise<void>;
}

interface IController {
  handle(request: IHttpRequest): Promise<IHttpResponse>;
}

interface IMiddlewareResult {
  success: boolean;
  error?: IHttpResponse;
  data?: any; // Dados para adicionar ao contexto
}

interface IMiddleware {
  handle(request: IHttpRequest): Promise<IMiddlewareResult>;
}

interface IHttpRequest {
  body: any;
  params: Record<string, string>;
  query: Record<string, any>;
  headers: Record<string, string>;
  method: string;
  url: string;
  user?: any; // Para dados do usuário autenticado
  context?: Record<string, any>; // Para dados compartilhados entre middlewares
}

interface IHttpResponse {
  statusCode: number;
  body: any;
  headers?: Record<string, string>;
}

export { IHttpServer, IController, IHttpRequest, IHttpResponse, IMiddleware, IMiddlewareResult }
