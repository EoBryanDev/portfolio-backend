import { IId } from "../interfaces/IId";
import { IUser, IUserProps } from "../interfaces/IUser"


class User implements IUser {
  props: IUserProps;

  constructor(props: IUserProps, idGenerator: IId) {

    const user: IUserProps = {
      ...props,
      id: idGenerator.generate(),
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
