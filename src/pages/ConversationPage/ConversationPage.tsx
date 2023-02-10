import { logOut } from "../../firebase/auth";
import { useAuth } from "../../helpers/hooks/useAuth";

export const ConversationPage = (): JSX.Element => {
  const { user, setUser } = useAuth();
  const handlelogOut = () => {
    logOut();
  };
  console.log(user);
  return <div className="page">Conversation</div>;
};
