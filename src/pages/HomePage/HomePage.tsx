import { useAuth } from "../../helpers/hooks/useAuth";

export const HomePage = (): JSX.Element => {
  const { user } = useAuth();
  return (
    <div className="page">
      {user?.email}
    </div>
  );
};
