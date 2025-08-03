import { IUser } from '@/domain/interfaces/IUser'
import { describe, it, expect } from 'vitest'
import { User } from '../User'

describe('User', () => {

  it('should create a new common user', () => {
    // Arrange
    const user: IUser = {
      username: 'teste',
      password: '1234',
      email: 'teste@teste.com',
      birthDate: '1998-01-29'
    }

    // Act
    const newUser = new User(user)

    // Assert
    expect(newUser).toBeInstanceOf(User)
    expect(newUser.getUserInfo().role).toBe('USER')
  })

  it('should create a admin user', () => {
    // Arrange
    const user: IUser = {
      username: 'admin',
      password: '1234',
      email: 'admin@admin.com',
      birthDate: '1998-01-29',
      role: 'ADMIN'
    }

    // Act
    const newUser = new User(user)

    // Assert
    expect(newUser).toBeInstanceOf(User)
    expect(newUser.getUserInfo().role).toBe('ADMIN')
  })

  it('should return infomations default', () => {
    // Arrange
    const user: IUser = {
      username: 'admin',
      password: '1234',
      email: 'teste@teste.com',
      birthDate: '1998-01-29'
    }

    // Act
    const newUser = new User(user);
    const userInfo = newUser.getUserInfo();

    // Assert
    expect(userInfo.id).toBeTruthy()
    expect(userInfo.createdAt).toBeTruthy()
    expect(userInfo.role).toBeTruthy()
  })


})
