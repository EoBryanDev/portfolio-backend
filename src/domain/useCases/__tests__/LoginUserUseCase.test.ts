import { User } from "../../entities/User";
import { CryptoUUIDAdapter } from "../../services/CryptoUUIDAdapter";
import { InMemoryUserRepository } from "../../../infrastructure/database/InMemoryDatabase";
import { describe, expect, it } from "vitest";

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
  it('should valid if user exists', async () => {

    // Arrange
    const payloadUser = {
      email: 'teste@teste.com',
      password: '1234'
    }

    // Act
    const validUser = await inMemoryUserRepository.findByEmail(payloadUser.email);

    // Assert
    expect(validUser).toBeInstanceOf(User);

  })
  it('should not return a user if it does not exists', async () => {

    // Arrange
    const payloadUser = {
      email: 'teste2@teste.com',
      password: '1234'
    }

    // Act
    const validUser = await inMemoryUserRepository.findByEmail(payloadUser.email);

    // Assert
    expect(validUser).not.toBeInstanceOf(User);

  })
  it('should not pass if credentials are incorrect', () => {
    // Arrange
    const usersRegistered: { email: string, password: string }[] | [] = []

    const payloadUser = {
      email: 'teste@teste.com',
      password: '123'
    }

    const validCredentials = usersRegistered.find(user => {
      return payloadUser.email === user.email && payloadUser.password === user.password
    });
    // Act

    // Assert
    expect(validCredentials).not.toBeTruthy()

  })
  it('should pass if credentials are correct', async () => {
    // Arrange
    const payloadUser = {
      email: 'teste@teste.com',
      password: '1234'
    }

    // Act
    const user = await inMemoryUserRepository.findByEmail(payloadUser.email);
    const { email, password } = user!.getUserDetails();

    // Assert
    expect(payloadUser.email).toEqual(email);
    expect(payloadUser.password).toEqual(password);

  })
})
