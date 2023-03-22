import { DocumentData } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { GetConversationById } from "../../../firebase/conversations";
import { auth } from "../../../firebase/firebase";
import { VideoButton } from "../../../ui";
import { useConversations } from "../../../zustand/conversations/conversations";
import { useIsAnswered } from "../../../zustand/videocall/isAnswered";
import { useIsCalling } from "../../../zustand/videocall/isCalling";
import { useStartCall } from "../../../zustand/videocall/startCall";
import { CallModal } from "./CallModal/CallModal";
import { ChooseCallVariantModal } from "./ChooseCallVariantModal/ChooseCallVariantModal";
import { VideoCallProps } from "./VideoCall.props";
import { VideoCallModal } from "./VideoCallModal";

function VideoCall({
  className,
  callUser,
  ...props
}: VideoCallProps): JSX.Element {
  const localRef = useRef<HTMLVideoElement>(null);
  const remoteRef = useRef<HTMLVideoElement>(null);
  const { conversationId } = useConversations((state) => ({
    conversationId: state.conversationId,
  }));
  const { setStartCall } = useStartCall((state) => ({
    setStartCall: state.setStartCall,
  }));

  const { isCalling, setIsCalling } = useIsCalling((state) => ({
    isCalling: state.isCalling,
    setIsCalling: state.setIsCalling,
  }));
  const { isAnswered, setIsAnswered } = useIsAnswered((state) => ({
    isAnswered: state.isAnswered,
    setIsAnswered: state.setIsAnswered,
  }));
  useEffect(() => {
    if (conversationId)
      GetConversationById(conversationId).then((data) => {
        setConversation(data);
      });
  }, []);
  const [proceedCall, setProceedCall] = useState<boolean>(false);
  const [conversation, setConversation] = useState<DocumentData | null>(null);
  const authUser = auth.currentUser?.uid;
  const isRecipient = authUser !== callUser;
  const id = typeof conversationId === "string" ? conversationId : "";
  const { startCalling, answerCall, declineCall } = useWebRTC(id);
  function call() {
    setProceedCall(true);
    setIsCalling(true);
    startCalling();
  }
  function answer() {
    setIsCalling(false);
    setProceedCall(false);
    setIsAnswered(true);
    answerCall();
  }
  function decline() {
    setIsAnswered(false);
    setStartCall(false);
    declineCall();
  }
  return (
    <div
      className={`absolute top-0 left-0 pageScreen bg-black bg-opacity-50 flex center  z-50 ${className}`}
      {...props}
    >
      {!proceedCall && !isCalling && !isAnswered && (
        <ChooseCallVariantModal videoOrAudioCall={call} />
      )}
      {proceedCall && isCalling && conversation && (
        <CallModal
          type="call"
          decline={decline}
          recipient={
            conversation.recipient.id == callUser
              ? conversation.creator
              : conversation.recipient
          }
        />
      )}
      {isRecipient && isCalling && conversation && (
        <CallModal
          type="answer"
          answer={answer}
          decline={decline}
          recipient={
            conversation.recipient.id == callUser
              ? conversation.recipient
              : conversation.creator
          }
        />
      )}
      {isAnswered && <VideoCallModal conversationId={id} />}
    </div>
  );
}

export { VideoCall };
