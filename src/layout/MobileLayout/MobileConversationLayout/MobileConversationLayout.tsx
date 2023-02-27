import { Outlet } from "react-router-dom";
import { ChatBoxHeader } from "../../../components/Chatbox/ChatboxHeader/ChatboxHeader";
import { MessageField } from "../../../components/Chatbox/MessagesField/MessagesField";

export const MobileConversationLayout = () => {
  return (
    <div className=" w-full h-screen flex flex-col ">
      <ChatBoxHeader />
      <div className="flex-1 overflow-y-scroll">
        <Outlet />
      </div>
      <MessageField />
    </div>
  );
};
