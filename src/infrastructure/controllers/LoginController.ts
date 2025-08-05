import { LoginUserUseCase } from "@/domain/useCases/LoginUserUseCase";
import { IController, IHttpRequest, IHttpResponse } from "../interface/IHttpServer";
import { access } from "fs";



class LoginController implements IController {
  constructor(
    private loginUserUseCase: LoginUserUseCase
  ) { }

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { access_token, token_type, expires_in } = await this.loginUserUseCase.execute({
        email: request.body.email,
        password: request.body.password
      });

      return {
        statusCode: 200,
        body: {
          access_token: access_token,
          token_type: token_type,
          expires_in: expires_in,
          expires_At: new Date(Date.now() + expires_in * 1000).toISOString(),
          created_At: new Date().toISOString(),

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

export { LoginController }
