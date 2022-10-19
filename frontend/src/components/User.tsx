interface IUser {
  name: string;
  email?: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }: Props) => {
  return (
    <div>
      <p>
        <strong>Nome: </strong> {user.name}
      </p>
      <p>
        <strong>E-mail: </strong> {user.email || "Não possui e-mail"}
      </p>
    </div>
  );
};

export default User;
