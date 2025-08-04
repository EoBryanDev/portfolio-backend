import { IUserProps } from '@/domain/interfaces/RootUser'
import { describe, it, expect } from 'vitest'
import { User } from '../User'
import { CryptoUUID } from '../../services/CryptoUUID';

describe('User Entity', () => {

  it('should create a new common user', () => {
    // Arrange
    const user: IUserProps = {
      firstName: 'teste',
      lastName: 'test 2',
      password: '1234',
      email: 'teste@teste.com',
      birthDate: '1998-01-29'
    }
    const idGenerator = new CryptoUUID();

    // Act
    const newUser = new User(user, idGenerator);

    // Assert
    expect(newUser).toBeInstanceOf(User);
    expect(newUser.getUserDetails().role).toBe('USER');
  });

  it('should create a admin user', () => {
    // Arrange
    const user: IUserProps = {
      firstName: 'admin',
      lastName: 'test 2',
      password: '1234',
      email: 'admin@admin.com',
      birthDate: '1998-01-29',
      role: 'ADMIN'
    }
    const idGenerator = new CryptoUUID();

    // Act
    const newUser = new User(user, idGenerator)

    // Assert
    expect(newUser).toBeInstanceOf(User)
    expect(newUser.getUserDetails().role).toBe('ADMIN')
  });

  it('should return infomations default', () => {
    // Arrange
    const user: IUserProps = {
      firstName: 'admin',
      lastName: 'test 2',
      password: '1234',
      email: 'teste@teste.com',
      birthDate: '1998-01-29'
    }
    const idGenerator = new CryptoUUID();

    // Act
    const newUser = new User(user, idGenerator);
    const userInfo = newUser.getUserDetails();

    // Assert
    expect(userInfo.id).toBeTruthy()
    expect(userInfo.createdAt).toBeTruthy()
    expect(userInfo.role).toBeTruthy()
  });


})
