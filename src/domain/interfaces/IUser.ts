import { TRoles } from "../types/TRoles";

interface IUser {
  props: IUserProps
  getUserDetails: () => IUserProps
}

interface IUserProps {
  id?: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  role?: TRoles;
  birthDate: string;
  createdAt?: string;
  active?: boolean;
}


export { IUser, IUserProps }
