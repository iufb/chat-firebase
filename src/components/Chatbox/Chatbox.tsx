import { Chat } from "./Chat/Chat";
import { ChatBoxHeader } from "./ChatboxHeader/ChatboxHeader";
import { MessageField } from "./MessagesField/MessagesField";

export const Chatbox = (): JSX.Element => {
  return (
    <div className="w-full  md:h-full flex flex-col  bg-white justify-between">
      <ChatBoxHeader />
      <Chat className="flex-1" />
      <MessageField />
    </div>
  );
};
