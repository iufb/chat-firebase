import { useIsMobile } from "../../../helpers/hooks/useIsMobile";
import { useRecipient } from "../../../zustand/users/recipient";
import { UserHeader } from "../../UserHeader/UserHeader";
import { ReactComponent as ArrowBack } from "../../../assets/arrow-back.svg";
import { Link, useNavigate } from "react-router-dom";
export const ChatBoxHeader = (): JSX.Element => {
  const { recipient } = useRecipient((state) => ({
    recipient: state.recipient,
  }));
  const { isMobile } = useIsMobile();
  const r = typeof recipient == "string" ? JSON.parse(recipient) : recipient;
  const navigate = useNavigate();
  const nav = () => {
    navigate("/conversations");
  };
  return (
    <>
      {recipient && (
        <div
          className={`flex ${
            isMobile ? "items-center gap-6 " : "items-start"
          }    w-full     top-16 p-2 lg:p-4 bg-white border-b border-gray-300`}
        >
          {isMobile && (
            <ArrowBack
              className="cursor-pointer  "
              onClick={() => navigate("/conversations")}
            />
          )}
          <UserHeader
            user={r}
            size="md:w-14 md:h-14 w-10 h-10 "
            text="md:text-xl text-lg"
            onClick={nav}
          />
        </div>
      )}
    </>
  );
};
