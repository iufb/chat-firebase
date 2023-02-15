import { Outlet } from "react-router-dom";
import { ConversationSidebar } from "../../components";

export const ConversationLayout = (): JSX.Element => {
  return (
    <div className="flex  w-full my-3 h-[830px] border border-gray-300 rounded-md">
      <div className="w-full max-w-[350px] border-r border-gray-300">
        <ConversationSidebar />
      </div>
      <div className="flex-1 p-1">
        <Outlet />
      </div>
    </div>
  );
};
