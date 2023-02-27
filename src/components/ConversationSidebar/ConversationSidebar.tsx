import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../../helpers/hooks/useAuth";
import { useConversations } from "../../zustand/conversations/conversations";
import { SidebarHeader } from "./SidebarHeader/SidebarHeader";
import { SidebarItem } from "./SidebarItem/SidebarItem";

export const ConversationSidebar = (): JSX.Element => {
  const { conversations, fetchConversations } = useConversations((state) => ({
    conversations: state.conversations,
    fetchConversations: state.fetchConversations,
  }));
  const [conversationState, setConversationState] = useState<DocumentData[]>();
  useEffect(() => {
    setConversationState(conversations);
    return () => setConversationState([]);
  }, [conversations]);
  const { user } = useAuth();
  useEffect(() => {
    try {
      if (user && user.id) fetchConversations(user.id);
    } catch (err) {
      console.log(err);
    }
  }, [user]);
  return (
    <div className="">
      <SidebarHeader />
      {conversationState &&
        conversationState.map((conversation) => (
          <SidebarItem key={conversation.id} conversation={conversation} />
        ))}
    </div>
  );
};
