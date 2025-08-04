import { IUser, IUserProps } from '@/domain/interfaces/IUser'
import { describe, it, expect } from 'vitest'
import { User } from '../User'
import { UUID } from '../../services/UUID'

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

    // Act
    const newUser = new User(user)

    console.log(newUser);


    // Assert
    expect(newUser).toBeInstanceOf(User);
    expect(newUser.getUserDetails().id).toBeInstanceOf(UUID)
    expect(newUser.getUserDetails().role).toBe('USER')
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

    // Act
    const newUser = new User(user)

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

    // Act
    const newUser = new User(user);
    const userInfo = newUser.getUserDetails();

    // Assert
    expect(userInfo.id).toBeTruthy()
    expect(userInfo.createdAt).toBeTruthy()
    expect(userInfo.role).toBeTruthy()
  });


})
