import { memo, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getLastMessage } from "../../../firebase/messages";
import { useAuth } from "../../../helpers/hooks/useAuth";
import { MessageType } from "../../../helpers/types/types";
import { useConversations } from "../../../zustand/conversations/conversations";
import { useRecipient } from "../../../zustand/users/recipient";
import { UserHeader } from "../../UserHeader/UserHeader";
import { SidebarItemProps } from "./SidebarItem.props";

export const SidebarItem = memo(
  ({ conversation, className, ...props }: SidebarItemProps): JSX.Element => {
    const { setRecipient } = useRecipient((state) => ({
      setRecipient: state.setRecipient,
    }));

    const { user } = useAuth();
    const { setConversationId } = useConversations((state) => ({
      setConversationId: state.setConversationId,
    }));
    const { recipient, creator, lastMessage } = conversation;
    const [lastMessageState, setLastMessageState] =
      useState<MessageType | null>(null);
    useEffect(() => {
      getLastMessage(conversation.id, setLastMessageState);
    }, [lastMessage]);
    const r = user && recipient.id == user.id ? creator : recipient;
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const active = pathname.split("/")[2] == conversation.id;
    return (
      <div
        className={`${className} w-full relative  ${
          active &&
          "bg-gray-100 flex  before:absolute before:w-1 before:h-28 before:bg-purple-500 before:top-0 before:left-0 "
        } border-b border-gray-300 h-28 p-3 flex gap-2 items-start cursor-pointer `}
        {...props}
        onClick={() => {
          navigate(`/conversations/${conversation.id}`);
          user && setRecipient(r);
          setConversationId(conversation.id);
        }}
      >
        {r && (
          <Link to={`/conversation/${conversation.id}`}>
            <div className="flex flex-col gap-2">
              <UserHeader user={r} className="flex justify-start" />
              {lastMessageState && (
                <p className="text-md text-gray-500  truncate lg:max-w-[330px] md:max-w-[220px] sm:max-w-[500px] xm:max-w-[350px]">
                  {lastMessageState.name == r.name
                    ? lastMessageState.content
                    : `You: ${lastMessageState.content}`}
                </p>
              )}
            </div>
          </Link>
        )}
      </div>
    );
  }
);
