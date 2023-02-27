import { doc } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { getMessages } from "../../../firebase/messages";
import { useIsMobile } from "../../../helpers/hooks/useIsMobile";
import { MessageType } from "../../../helpers/types/types";
import { useConversations } from "../../../zustand/conversations/conversations";
import { Message } from "../../Message/Message";
import { ChatProps } from "./Chat.props";

export const Chat = ({ className, ...props }: ChatProps): JSX.Element => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { conversationId } = useConversations((state) => ({
    conversationId: state.conversationId,
  }));
  const { isMobile } = useIsMobile();
  useEffect(() => {
    try {
      conversationId && getMessages(conversationId, setMessages);
    } catch (e) {
      console.log(e);
      setMessages([]);
    }
    return () => setMessages([]);
  }, [conversationId]);
  const refContainer = useRef<HTMLDivElement>(null);
  const refMes = useRef<HTMLDivElement>(null);
  useEffect(() => {
    refMes.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <>
      <div
        className={`${className} px-3  py-3 flex flex-col    md:mb-0  md:overflow-y-scroll gap-2 `}
        {...props}
        ref={refContainer}
      >
        {messages.length > 0 ? (
          messages.map((message) => (
            <Message message={message} key={message.timestamp} ref={refMes} />
          ))
        ) : (
          <div>No messages</div>
        )}
      </div>
    </>
  );
};
