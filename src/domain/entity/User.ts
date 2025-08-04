import { IUser, IUserProps } from "../interfaces/IUser"
import { UUID } from "../services/UUID";


class User implements IUser {
  props: IUserProps;

  constructor(props: IUserProps) {

    const user: IUserProps = {
      ...props,
      id: new UUID(),
      createdAt: props.createdAt ? props.createdAt : new Date().toISOString(),
      active: props.active ? props.active : true,
      role: props.role ? props.role : 'USER'
    }

    console.log(user);


    this.props = user
  }

  getUserDetails() {
    return this.props
  }

}

export { User }
