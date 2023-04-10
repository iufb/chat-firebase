import { useMeeting } from "@videosdk.live/react-sdk";
import { doc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../../../firebase/firebase";
import { declineCall } from "../../../../firebase/videocall";
import { VideoButton } from "../../../../ui";
import { useRecipient } from "../../../../zustand/users/recipient";
import { useCallStatus } from "../../../../zustand/videocall/callStatus";
import { useStartCall } from "../../../../zustand/videocall/startCall";
import { CallModalProps } from "./CallModal.props";

export const CallModal = ({
  type,
  callUserId,
  userId,
  conversation,
  setJoined,
  className,
  ...props
}: CallModalProps): JSX.Element => {
  const { join, leave } = useMeeting();
  const { callStatus, setCallStatus } = useCallStatus();
  const { setStartCall } = useStartCall((state) => ({
    setStartCall: state.setStartCall,
  }));
  const callUser =
    callUserId === conversation.creator.id
      ? conversation.creator
      : conversation.recipient;
  const recipient =
    callUser.id == conversation.creator.id
      ? conversation.recipient
      : conversation.creator;
  const { setRecipient } = useRecipient((state) => ({
    setRecipient: state.setRecipient,
  }));
  useEffect(() => {
    if (callUserId == userId && callStatus === "Answered") {
      setJoined("JOINING");
      join();
    }
  }, [callStatus, callUserId, userId]);
  const answerCall = async () => {
    await setDoc(
      doc(db, "calls", conversation.id),
      {
        callStatus: "Answered",
      },
      { merge: true }
    );
    setRecipient(recipient);
    setJoined("JOINING");
    join();
  };
  const decline = async () => {
    declineCall(conversation.id, recipient.id);
    setCallStatus("Declined");
    leave();
    setStartCall(false);
  };
  return (
    <div
      className={`${className} bg-gray-700 p-4 rounded-md h-72 w-full min-w-[250px] flex flex-col items-center gap-4`}
      {...props}
    >
      <h1 className="text-lg text-white animate-pulse">
        {type == "call" ? "Calling..." : `Answer the call.`}
      </h1>
      {recipient?.avatar ? (
        <img
          src={type == "call" ? recipient.avatar : callUser.avatar}
          className="w-24 h-24 rounded-full object-cover animate-shakeAnimation"
        />
      ) : (
        <div className="w-24 h-24 rounded-full animate-shakeAnimation text-zinc-50" />
      )}
      <h2 className="text-white text-xl text-bold">
        {type == "call" ? recipient?.name : callUser.name}
      </h2>
      <div className="flex gap-8 ">
        {type == "answer" && <VideoButton type="call" onClick={answerCall} />}
        <VideoButton type="decline" onClick={decline} />
      </div>
    </div>
  );
};
