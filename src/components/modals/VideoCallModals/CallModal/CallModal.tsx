import { VideoButton } from "../../../../ui";
import { CallModalProps } from "./CallModal.props";

export const CallModal = ({
  type,
  decline,
  answer,
  recipient,
  className,
  ...props
}: CallModalProps): JSX.Element => {
  return (
    <div
      className={`${className} bg-gray-700 p-4 rounded-md h-72 w-full max-w-[250px] flex flex-col items-center gap-4`}
      {...props}
    >
      <h1 className="text-lg text-white animate-pulse">
        {type == "call" ? "Calling..." : `Answer the call.`}
      </h1>
      <img
        src={recipient.avatar}
        className="w-24 h-24 rounded-full object-cover animate-shakeAnimation"
      />
      <h2 className="text-white text-xl text-bold">{recipient.name}</h2>
      <div className="flex gap-8 ">
        {type == "answer" && answer && (
          <VideoButton type="call" onClick={answer} />
        )}
        <VideoButton type="decline" onClick={decline} />
      </div>
    </div>
  );
};
