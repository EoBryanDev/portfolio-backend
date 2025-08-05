import { LoginUserUseCase } from "@/domain/useCases/LoginUserUseCase";

interface IUseCaseContainer {
  loginUserUseCase: LoginUserUseCase;
}

export { IUseCaseContainer };
