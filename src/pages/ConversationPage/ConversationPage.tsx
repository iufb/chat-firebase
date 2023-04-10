import { Outlet, useLocation } from "react-router-dom";
import { useCreateConversationModal } from "../../zustand/modals/modal";

export const ConversationPage = (): JSX.Element => {
  const { pathname } = useLocation();
  const { setIsShow } = useCreateConversationModal();
  const isMain = pathname === "/conversations";
  return (
    <div className={`page ${isMain && "center"} `}>
      {isMain ? (
        <div>
          Choose chat or create{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => setIsShow(true)}
          >
            new
          </span>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};
