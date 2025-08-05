import { IHttpRequest, IMiddleware, IMiddlewareResult } from "../interface/IHttpServer";

class AuthenticationMiddleware implements IMiddleware {
  async handle(request: IHttpRequest): Promise<IMiddlewareResult> {
    const token = request.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return {
        success: false,
        error: {
          statusCode: 401,
          body: { error: 'Token required' }
        }
      };
    }

    // Simulação de validação de token
    if (token !== 'valid-token') {
      return {
        success: false,
        error: {
          statusCode: 401,
          body: { error: 'Invalid token' }
        }
      };
    }

    // Adiciona dados do usuário ao request
    return {
      success: true,
      data: {
        user: { id: '1', name: 'John Doe', role: 'admin' }
      }
    };
  }
}

export { AuthenticationMiddleware };
