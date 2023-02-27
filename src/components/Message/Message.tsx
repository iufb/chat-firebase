import { ForwardedRef, forwardRef } from "react";
import { ConvertDate } from "../../helpers/helpers";
import { useRecipient } from "../../zustand/users/recipient";
import { MessageProps } from "./Message.props";

export const Message = forwardRef(
  (
    { message, className, ...props }: MessageProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const { name, avatar, timestamp, content } = message;
    const { recipient } = useRecipient((state) => ({
      recipient: state.recipient,
    }));
    const getRecipient = (item: typeof recipient) => {
      if (typeof item === null) return;
      else if (typeof item === "undefined") return;
      else if (typeof item === "string") return JSON.parse(item);
      else return item;
    };
    const isRecipient = getRecipient(recipient).name == name;
    return (
      <div
        className={`${className} w-full  flex ${
          isRecipient ? "justify-start" : "md:justify-end justify-start"
        }  `}
        {...props}
        ref={ref}
      >
        <div className="flex gap-2">
          <img src={avatar} className="userCircle w-10 h-10" />
          <div className="flex flex-col gap-2 lg:max-w-[600px] max-w-[290px] ">
            <div className="flex justify-between min-w-[250px] lg:min-w-[300px]">
              <p>{name}</p>
              <span className="text-gray-500">{ConvertDate(timestamp)}</span>
            </div>
            <span
              className={`${
                isRecipient
                  ? " bg-gray-100 "
                  : "bg-purple-500 text-white font-bold"
              }  p-3 rounded-lg rounded-l-none rounded-b-lg`}
            >
              {content}
            </span>
          </div>
        </div>
      </div>
    );
  }
);
