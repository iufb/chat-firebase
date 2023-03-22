import { doc } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { getMessages } from "../../../firebase/messages";
import { useIsMobile } from "../../../helpers/hooks/useIsMobile";
import { MessageType } from "../../../helpers/types/types";
import { Spinner } from "../../../ui";
import { useConversations } from "../../../zustand/conversations/conversations";
import { Message } from "../../Message/Message";
import { ChatProps } from "./Chat.props";

export const Chat = ({ className, ...props }: ChatProps): JSX.Element => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const { conversationId } = useConversations((state) => ({
    conversationId: state.conversationId,
  }));
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isMobile } = useIsMobile();
  useEffect(() => {
    setIsLoading(true);
    conversationId && getMessages(conversationId, setMessages, setIsLoading);
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
        {messages && messages.length > 0 ? (
          messages.map((message) => (
            <Message message={message} key={message.timestamp} ref={refMes} />
          ))
        ) : (
          <div className="w-full h-full center">
            {isLoading ? (
              <Spinner />
            ) : (
              <h2 className="text-xl text-gray-400">No messages found.</h2>
            )}
          </div>
        )}
      </div>
    </>
  );
};
