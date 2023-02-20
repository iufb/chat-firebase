import { ChatBoxHeader } from "./ChatboxHeader/ChatboxHeader";
import { MessageField } from "./MessagesField/MessagesField";

export const Chatbox = (): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col bg-black justify-between">
      <ChatBoxHeader />
      <MessageField />
    </div>
  );
};
