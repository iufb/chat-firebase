import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../helpers/hooks/useAuth";
import { useConversations } from "../../zustand/conversations/conversations";

export const ConversationPage = (): JSX.Element => {
  const { pathname } = useLocation();
  const { fetchConversations } = useConversations((state) => ({
    fetchConversations: state.fetchConversations,
  }));
  const { user } = useAuth();
  useEffect(() => {
    const controller = new AbortController();
    try {
      if (user && user.id) fetchConversations(user.id);
    } catch (err) {
      console.log(err);
    }
    return () => controller?.abort();
  }, []);
  const isMain = pathname === "/conversations";
  return (
    <div className={`page ${isMain && "center"} `}>
      {isMain ? <div>Choose chat or create new</div> : <Outlet />}
    </div>
  );
};
