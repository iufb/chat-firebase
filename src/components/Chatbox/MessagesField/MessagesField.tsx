import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { updateLastMessage } from "../../../firebase/conversations";
import { sendMessage } from "../../../firebase/messages";
import { useAuth } from "../../../helpers/hooks/useAuth";
import { MessageFieldProps } from "./MessageField.props";
import { ReactComponent as SmileIcon } from "../../../assets/smile.svg";
import { useOnClickOutside } from "../../../helpers/hooks/useOnClickOutside";
import { Button } from "../../../ui";
import { ReactComponent as EnterIcon } from "../../../assets/enter.svg";
export const MessageField = ({
  className,
  ...props
}: MessageFieldProps): JSX.Element => {
  const [value, setValue] = useState<string>("");
  const [showEmoji, setShowEmoji] = useState<boolean>(false);
  const { user } = useAuth();
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const conversationId = pathname.split("/")[2];
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  function send() {
    if (user) {
      sendMessage(conversationId, user, value);
      updateLastMessage(conversationId, value);
      setValue("");
    }
  }
  const onMessage = (e: KeyboardEvent) => {
    if (e.code == "Enter") {
      send();
    }
  };
  useOnClickOutside(ref, () => setShowEmoji(false));
  return (
    <div
      className={`${className} w-full center pb-4  bottom-0 bg-white gap-3 md:static `}
      {...props}
      onKeyDown={onMessage}
    >
      <div className="relative w-full max-w-[320px] lg:max-w-[500px] px-2 rounded-2xl rounded-r-none rounded-t-2xl border border-gray-300  outline-none  flex justify-between items-center">
        <SmileIcon
          className="fill-gray-500 cursor-pointer "
          onClick={() => setShowEmoji(!showEmoji)}
        />
        <input
          className="flex-1 p-5 outline-none"
          value={value}
          onChange={onChange}
        />
        {showEmoji && (
          <div className="absolute bottom-20 lg:-left-20" ref={ref}>
            <EmojiPicker
              onEmojiClick={(emojiData: EmojiClickData) => {
                setValue(value + emojiData.emoji);
              }}
            />
          </div>
        )}
      </div>
      <Button variant="icon" onClick={send}>
        <EnterIcon className="fill-gray-500 w-10 h-10 hover:scale-105" />
      </Button>
    </div>
  );
};
