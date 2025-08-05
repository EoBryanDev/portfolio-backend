import { IController, IHttpRequest, IHttpResponse } from "../interface/IHttpServer";

class HealthCheckController implements IController {
  constructor(
  ) { }

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {


      return {
        statusCode: 200,
        body: {
          status: 'healthy',
          timestamp: new Date().toISOString(),
          uptime: process.uptime()
        }
      };

    } catch (error: any) {
      return {
        statusCode: 500,
        body: {
          error: 'Internal Server Error',
          message: error.message || 'An unexpected error occurred'
        }
      }
    }
  }
}

export { HealthCheckController }
