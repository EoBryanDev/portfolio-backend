import { User } from "../entities/User";
import { IUserProps } from "../interfaces/RootUser";

interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;

  findById(id: string): Promise<User | null>;

  update(user: User): Promise<void>;

  create(user: IUserProps): Promise<User>;

  delete(id: string): Promise<void>;

  findAll(): Promise<User[]>;
}

export { IUserRepository };
