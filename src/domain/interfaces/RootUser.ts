import { TRoles } from "../types/TRoles";
import { Id } from "./Id";

abstract class RootUser {
  protected abstract props: IUserProps
  public abstract getUserDetails(): IUserDetails;
}

interface IUserProps {
  id?: Id;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  role?: TRoles;
  birthDate: string;
  createdAt?: string;
  active?: boolean;
}

interface IUserDetails {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  role: TRoles;
  birthDate: string;
  createdAt: string;
  active: boolean;
}


export { RootUser, IUserProps, IUserDetails }
