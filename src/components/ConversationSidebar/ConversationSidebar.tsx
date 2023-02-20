import { useConversations } from "../../zustand/conversations/conversations";
import { SidebarHeader } from "./SidebarHeader/SidebarHeader";
import { SidebarItem } from "./SidebarItem/SidebarItem";

export const ConversationSidebar = (): JSX.Element => {
  const { conversations } = useConversations((state) => ({
    conversations: state.conversations,
  }));
  return (
    <div className="">
      <SidebarHeader />
      {conversations &&
        conversations.map((conversation) => (
          <SidebarItem key={conversation.id} conversation={conversation} />
        ))}
    </div>
  );
};
