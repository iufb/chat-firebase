import { Outlet } from "react-router-dom";
import { ConversationSidebar } from "../../components";
import { useIsMobile } from "../../helpers/hooks/useIsMobile";

export const ConversationLayout = (): JSX.Element => {
  const { isMobile } = useIsMobile();
  return (
    <div className="flex  w-full my-3 h-[830px] border border-gray-300 rounded-md  overflow-x-none">
      <div
        className={`w-full ${
          isMobile ? "" : "lg:max-w-[350px] max-w-[250px] "
        }  border-r border-gray-300`}
      >
        <ConversationSidebar />
      </div>
      {!isMobile && (
        <div className="flex-1  ">
          <Outlet />
        </div>
      )}
    </div>
  );
};
