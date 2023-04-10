import { useMeeting } from "@videosdk.live/react-sdk";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { GetConversationById } from "../../firebase/conversations";
import { db } from "../../firebase/firebase";
import { useAuth } from "../../helpers/hooks/useAuth";
import { Spinner } from "../../ui";
import { useStartCall } from "../../zustand/videocall/startCall";
import { CallModal } from "../modals/VideoCallModals/CallModal/CallModal";
import { ParticipantLayout } from "./ParticipantLayout/ParticipantLayout";
import { ParticipantView } from "./ParticipantView";

function CallView({
  meetingId,
  onMeetingLeave,
  conversationId,
}: {
  meetingId: string;
  onMeetingLeave: () => void;
  conversationId: string;
}) {
  const [joined, setJoined] = useState<string>("");
  const [callUser, setCallUser] = useState<string>("");
  const [conversation, setConversation] = useState<DocumentData | null>(null);
  const { setStartCall } = useStartCall((state) => ({
    setStartCall: state.setStartCall,
  }));
  const { user } = useAuth();
  const userId = user && typeof user.id == "string" ? user.id : "";

  const { participants, leave } = useMeeting({
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    onMeetingLeft: () => {
      onMeetingLeave();
    },
    onParticipantLeft: () => {
      setStartCall(false);
      leave();
      onMeetingLeave();
    },
  });

  useEffect(() => {
    const getCallUser = async (): Promise<DocumentData> => {
      const callRef = doc(db, "calls", conversationId);
      const data = await getDoc(callRef);
      if (!data.exists()) {
        throw new Error("Call not found.");
      }
      return data.data();
    };
    getCallUser().then((data) => setCallUser(data.callUser));
  }, []);
  useEffect(() => {
    GetConversationById(conversationId).then((data) => {
      setConversation(data);
    });
  }, []);

  return (
    <div>
      {joined && joined == "JOINED" ? (
        <ParticipantLayout>
          {[...participants.keys()].map((participantId) => (
            <ParticipantView
              participantId={participantId}
              key={participantId}
            />
          ))}
        </ParticipantLayout>
      ) : joined && joined == "JOINING" ? (
        <div className="center flex-col gap-2">
          <Spinner />
          <p className="text-white animate-pulse">Joining the meeting...</p>
        </div>
      ) : (
        conversation && (
          <CallModal
            type={callUser == userId ? "call" : "answer"}
            callUserId={callUser}
            conversation={conversation}
            userId={userId}
            setJoined={setJoined}
          />
        )
      )}
    </div>
  );
}
export { CallView };
