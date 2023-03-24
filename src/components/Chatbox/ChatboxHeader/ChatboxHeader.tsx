import { useIsMobile } from "../../../helpers/hooks/useIsMobile";
import { useRecipient } from "../../../zustand/users/recipient";
import { UserHeader } from "../../UserHeader/UserHeader";
import { ReactComponent as ArrowBack } from "../../../assets/arrow-back.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../ui";
import { ReactComponent as CallIcon } from "../../../assets/call.svg";
import { useStartCall } from "../../../zustand/videocall/startCall";
import { useEffect, useState } from "react";
import { useIsCalling } from "../../../zustand/videocall/isCalling";
import { useConversations } from "../../../zustand/conversations/conversations";
import { doc, DocumentData, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase";
import { useIsAnswered } from "../../../zustand/videocall/isAnswered";
import VideoCall from "../../VideoCall/VideoCall";
export const ChatBoxHeader = (): JSX.Element => {
  const { recipient } = useRecipient((state) => ({
    recipient: state.recipient,
  }));
  const { startCall, setStartCall } = useStartCall((state) => ({
    setStartCall: state.setStartCall,
    startCall: state.startCall,
  }));
  const { isCalling, setIsCalling } = useIsCalling((state) => ({
    isCalling: state.isCalling,
    setIsCalling: state.setIsCalling,
  }));
  const { isAnswered, setIsAnswered } = useIsAnswered((state) => ({
    isAnswered: state.isAnswered,
    setIsAnswered: state.setIsAnswered,
  }));

  const { conversationId } = useConversations((state) => ({
    conversationId: state.conversationId,
  }));
  const [callUser, setCallUser] = useState<string>("");
  useEffect(() => {
    if (conversationId)
      onSnapshot(doc(db, "calls", conversationId), (doc) => {
        if (doc.exists()) {
          const data = doc.data();
          setIsCalling(data.isCalling);
          setIsAnswered(data.isAnswered);
          setCallUser(data.callUser);
        }
      });
  }, []);
  useEffect(() => {
    setStartCall(isCalling || isAnswered);
  }, [isCalling, isAnswered]);
  const { isMobile } = useIsMobile();
  const r: DocumentData =
    typeof recipient == "string" ? JSON.parse(recipient) : recipient;
  const navigate = useNavigate();
  const nav = () => {
    navigate("/conversations");
  };
  return (
    <>
      {recipient && (
        <div
          className={`flex  justify-between ${
            isMobile ? "items-center gap-6 " : " justify-between items-start"
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
          <Button
            variant="icon"
            className="w-14 h-14 center mr-4"
            onClick={() => setStartCall(true)}
          >
            <CallIcon />
          </Button>
        </div>
      )}
      <VideoCall />
    </>
  );
};
