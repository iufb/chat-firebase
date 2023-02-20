import { useRecipient } from "../../../zustand/users/recipient";
import { UserHeader } from "../../UserHeader/UserHeader";

export const ChatBoxHeader = (): JSX.Element => {
  const { recipient } = useRecipient((state) => ({
    recipient: state.recipient,
  }));
  return (
    <>
      {recipient && (
        <div className="flex items-star p-4 bg-white border-b border-gray-300">
          <UserHeader user={recipient} size="w-14 h-14" text="text-xl" />
        </div>
      )}
    </>
  );
};
