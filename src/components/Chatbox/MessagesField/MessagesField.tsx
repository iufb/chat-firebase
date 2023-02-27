import { ChangeEvent, KeyboardEvent, useState } from "react";
import { useLocation } from "react-router-dom";
import { updateLastMessage } from "../../../firebase/conversations";
import { sendMessage } from "../../../firebase/messages";
import { useAuth } from "../../../helpers/hooks/useAuth";
import { MessageFieldProps } from "./MessageField.props";

export const MessageField = ({
  className,
  ...props
}: MessageFieldProps): JSX.Element => {
  const [value, setValue] = useState<string>("");
  const { user } = useAuth();
  const { pathname } = useLocation();

  const conversationId = pathname.split("/")[2];
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onMessage = (e: KeyboardEvent) => {
    if (e.code == "Enter") {
      if (user) {
        sendMessage(conversationId, user, value);
        updateLastMessage(conversationId, value);
        setValue("");
      }
    }
  };

  return (
    <div
      className={`${className} w-full center pb-4  bottom-0 bg-white md:static `}
      {...props}
      onKeyDown={onMessage}
    >
      <input
        className="w-full max-w-[320px] lg:max-w-[500px] px-3 py-4 rounded-2xl rounded-r-none rounded-t-2xl border border-gray-300  outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
