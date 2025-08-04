import { Id } from "../interfaces/Id";
import { RootUser, IUserProps, IUserDetails } from "../interfaces/RootUser"


class User extends RootUser {
  protected props: IUserProps;

  constructor(props: IUserProps, idGenerator: Id) {
    super();
    const user: IUserProps = {
      ...props,
      id: idGenerator,
      createdAt: props.createdAt ?? new Date().toISOString(),
      active: props.active ?? true,
      role: props.role ?? 'USER'
    }

    this.props = user
  }

  public getUserDetails() {
    const userId = this.props.id!
    const user: IUserDetails = {
      ...this.props,
      id: userId.getId(),
      createdAt: this.props.createdAt!,
      active: this.props.active!,
      role: this.props.role!
    }
    return user
  }

}

export { User }
