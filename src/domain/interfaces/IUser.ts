import { TRoles } from "../types/TRoles";

interface IUser {
  id?: string;
  username: string;
  password: string;
  email: string;
  role: TRoles;
  birthDate: string;
  createdAt?: string;
  active?: boolean;
}

export { IUser }
