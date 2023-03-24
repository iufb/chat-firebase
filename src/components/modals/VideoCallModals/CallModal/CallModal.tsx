import { useMeeting } from "@videosdk.live/react-sdk";
import { doc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../../../firebase/firebase";
import { VideoButton } from "../../../../ui";
import { useIsAnswered } from "../../../../zustand/videocall/isAnswered";
import { CallModalProps } from "./CallModal.props";

export const CallModal = ({
  type,
  callUserId,
  userId,
  conversation,
  className,
  ...props
}: CallModalProps): JSX.Element => {
  const { join, leave } = useMeeting();
  const { isAnswered } = useIsAnswered((state) => ({
    isAnswered: state.isAnswered,
  }));
  const callUser =
    callUserId === conversation.creator.id
      ? conversation.creator
      : conversation.recipient;
  const recipient =
    callUser.id == conversation.creator.id
      ? conversation.recipient
      : conversation.creator;
  useEffect(() => {
    if (callUserId == userId && isAnswered) {
      join();
    }
  }, [isAnswered]);
  const answerCall = async () => {
    await setDoc(doc(db, "calls", conversation.id), {
      isAnswered: true,
    });
    join();
  };

  const decline = async () => {
    await setDoc(doc(db, "calls", conversation.id), {
      meetingId: null,
      isAnswered: false,
    });
    leave();
  };
  return (
    <div
      className={`${className} bg-gray-700 p-4 rounded-md h-72 w-full max-w-[250px] flex flex-col items-center gap-4`}
      {...props}
    >
      <h1 className="text-lg text-white animate-pulse">
        {type == "call" ? "Calling..." : `Answer the call.`}
      </h1>
      {recipient?.avatar ? (
        <img
          src={recipient.avatar}
          className="w-24 h-24 rounded-full object-cover animate-shakeAnimation"
        />
      ) : (
        <div className="w-24 h-24 rounded-full animate-shakeAnimation text-zinc-50" />
      )}
      <h2 className="text-white text-xl text-bold">{recipient?.name}</h2>
      <div className="flex gap-8 ">
        {type == "answer" && <VideoButton type="call" onClick={answerCall} />}
        <VideoButton type="decline" onClick={decline} />
      </div>
    </div>
  );
};
