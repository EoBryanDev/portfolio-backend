import { IUser } from "../interfaces/IUser"


class User {
  private props: IUser;

  constructor(props: IUser) {

    const user: IUser = {
      ...props,
      id: props.id ? props.id : '123',
      createdAt: props.createdAt ? props.createdAt : new Date().toISOString(),
      active: props.active ? props.active : true,
      role: props.role ? props.role : 'USER'
    }

    this.props = user
  }

  getUserInfo() {
    return this.props
  }

}

export { User }
