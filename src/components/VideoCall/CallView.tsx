import { useMeeting } from "@videosdk.live/react-sdk";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { GetConversationById } from "../../firebase/conversations";
import { db } from "../../firebase/firebase";
import { useAuth } from "../../helpers/hooks/useAuth";
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
  const { user } = useAuth();
  const userId = user && typeof user.id == "string" ? user.id : "";
  //Get the method which will be used to join the meeting.
  //We will also get the participants list to display all participants
  const { join, participants } = useMeeting({
    //callback for when meeting is joined successfully
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
    //callback for when meeting is left
    onMeetingLeft: () => {
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
    <div className="center">
      <h3>Meeting Id: {meetingId}</h3>
      {joined && joined == "JOINED" ? (
        <ParticipantLayout>
          //For rendering all the participants in the meeting
          {[...participants.keys()].map((participantId) => (
            <ParticipantView participantId={participantId} />
          ))}
        </ParticipantLayout>
      ) : (
        conversation && (
          <CallModal
            type={callUser == userId ? "call" : "answer"}
            callUserId={callUser}
            conversation={conversation}
            userId={userId}
          />
        )
      )}
    </div>
  );
}
export { CallView };
