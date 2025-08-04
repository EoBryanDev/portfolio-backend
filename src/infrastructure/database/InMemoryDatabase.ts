import { User } from "../../domain/entities/User";
import { IUserProps } from "../../domain/interfaces/RootUser";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { CryptoUUIDAdapter } from "../../domain/services/CryptoUUIDAdapter";


class InMemoryUserRepository implements IUserRepository {

  readonly users: User[] = [];

  constructor(initialValue: User[] = []) {
    this.users = initialValue;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.getUserDetails().email === email) || null;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(user => user.getUserDetails().id === id) || null;
  }

  async update(user: User): Promise<void> {
    const index = this.users.findIndex(u => u.getUserDetails().id === user.getUserDetails().id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  async create(user: IUserProps): Promise<User> {

    const createdUser = new User(user, new CryptoUUIDAdapter());
    this.users.push(createdUser);

    return createdUser;
  }

  async delete(id: string): Promise<void> {
    const index = this.users.findIndex(user => user.getUserDetails().id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }

  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

}

export { InMemoryUserRepository };
