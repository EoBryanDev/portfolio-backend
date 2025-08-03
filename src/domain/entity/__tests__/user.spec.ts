import { IUser } from '@/domain/interfaces/IUser'
import { describe, it, expect } from 'vitest'
import { User } from '../User'

describe('User', () => {

  it('should create a new user', () => {
    // Arrange
    const user: IUser = {
      username: 'admin',
      password: '1234',
      email: 'teste@teste.com',
      role: 'ADMIN',
      birthDate: '1998-01-29',
      active: false
    }

    // Act
    const newUser = new User(user)

    // Assert
    expect(newUser).toBeInstanceOf(User)
  })

  it('should return user info', () => {
    // Arrange
    const user: IUser = {
      username: 'admin',
      password: '1234',
      email: 'teste@teste.com',
      role: 'ADMIN',
      birthDate: '1998-01-29'
    }

    // Act
    const newUser = new User(user);
    const userInfo = newUser.getUserInfo();

    console.log(userInfo);
    // Assert

    expect(userInfo).toBeTruthy()
  })


})
