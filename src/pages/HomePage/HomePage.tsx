import { useAuth } from "../../helpers/hooks/useAuth";
import { useAllUsers } from "../../zustand/users/users";

export const HomePage = (): JSX.Element => {
  const { user } = useAuth();
  const { users, getUsers } = useAllUsers((state) => ({
    users: state.users,
    getUsers: state.getUsers,
  }));
  console.log(users);
  return <div className="page ">Home</div>;
};
