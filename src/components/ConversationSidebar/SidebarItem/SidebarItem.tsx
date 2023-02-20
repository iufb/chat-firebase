import { useLocation, useNavigate } from "react-router-dom";
import { GetNickName } from "../../../helpers/helpers";
import { useRecipient } from "../../../zustand/users/recipient";
import { UserHeader } from "../../UserHeader/UserHeader";
import { SidebarItemProps } from "./SidebarItem.props";

export const SidebarItem = ({
  conversation,
  className,
  ...props
}: SidebarItemProps): JSX.Element => {
  const { setRecipient } = useRecipient((state) => ({
    setRecipient: state.setRecipient,
  }));
  const { recipient } = conversation;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const active = pathname.split("/")[2] == conversation.id;
  return (
    <div
      className={`${className} w-full relative  ${
        active &&
        "bg-gray-100 before:absolute before:w-1 before:h-32 before:bgGradient before:top-0 before:left-0 "
      } border-b border-gray-300 h-32 p-3 flex gap-2 items-start cursor-pointer `}
      {...props}
      onClick={() => {
        navigate(`/conversations/${conversation.id}`);
        recipient && setRecipient(recipient);
      }}
    >
      {recipient && (
        <>
          <UserHeader user={recipient} />
        </>
      )}
    </div>
  );
};
