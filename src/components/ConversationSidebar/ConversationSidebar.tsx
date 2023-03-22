import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../../helpers/hooks/useAuth";
import { useConversations } from "../../zustand/conversations/conversations";
import { SidebarHeader } from "./SidebarHeader/SidebarHeader";
import { SidebarItem } from "./SidebarItem/SidebarItem";

export const ConversationSidebar = (): JSX.Element => {
  const { user } = useAuth();
  const { conversations, fetchConversations } = useConversations((state) => ({
    conversations: state.conversations,
    fetchConversations: state.fetchConversations,
  }));
  useEffect(() => {
    try {
      if (user && user.id) fetchConversations(user.id);
    } catch (err) {
      console.log(err);
    }
  }, [user]);
  return (
    <div>
      <SidebarHeader />
      {conversations &&
        conversations.map((conversation) => (
          <SidebarItem key={conversation.id} conversation={conversation} />
        ))}
    </div>
  );
};
