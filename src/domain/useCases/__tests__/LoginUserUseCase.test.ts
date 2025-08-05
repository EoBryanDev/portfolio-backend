import { User } from "../../entities/User";
import { CryptoUUIDAdapter } from "../../services/CryptoUUIDAdapter";
import { InMemoryUserRepository } from "../../../infrastructure/database/InMemoryDatabase";
import { describe, expect, it } from "vitest";
import { LoginUserUseCase } from "../LoginUserUseCase";
import { JWTAdapter } from "../../../domain/services/JWTAdapter";

describe('LoginUser Use Case', () => {
  // Arrange
  const mock = {
    firstName: 'admin',
    lastName: 'test 2',
    password: '1234',
    email: 'teste@teste.com',
    birthDate: '1998-01-29'
  }
  const user = new User(mock, new CryptoUUIDAdapter())
  const inMemoryUserRepository = new InMemoryUserRepository([user]);

  it('should has an error if does not exist a email', async () => {

    // Arrange
    const login = new LoginUserUseCase(inMemoryUserRepository, new JWTAdapter())

    const payloadUser = {
      email: 'teste2@teste.com',
      password: '1234'
    };

    // Act & Assert
    await expect(login.execute(payloadUser)).rejects.toThrow();

  })
  it('should has an error if password be different', async () => {

    // Arrange
    const login = new LoginUserUseCase(inMemoryUserRepository, new JWTAdapter())

    const payloadUser = {
      email: 'teste@teste.com',
      password: '12345'
    };

    // Act & Assert
    await expect(login.execute(payloadUser)).rejects.toThrow();

  })
  it('should return a jwt token', async () => {

    // Arrange
    const login = new LoginUserUseCase(inMemoryUserRepository, new JWTAdapter())

    const payloadUser = {
      email: 'teste@teste.com',
      password: '1234'
    };

    const loginResponse = await login.execute(payloadUser);

    // Act & Assert
    expect(loginResponse).toHaveProperty('access_token');

  })

})
