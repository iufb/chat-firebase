import { MeetingProvider } from "@videosdk.live/react-sdk";
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { useAuth } from "../../helpers/hooks/useAuth";
import { ChooseCallVariantModal } from "../modals/VideoCallModals/ChooseCallVariantModal/ChooseCallVariantModal";
import { createMeeting, token } from "./videoSdk";
import { CallView } from "./CallView";
import { useConversations } from "../../zustand/conversations/conversations";
import { useIsAnswered } from "../../zustand/videocall/isAnswered";
export default function VideoCall() {
  const [meetingId, setMeetingId] = useState<string | null>(null);
  const [webcamEnabled, setWebcamEnabled] = useState<boolean>(true);
  const [proceedCall, setProceedCall] = useState<boolean>(false);
  const { setIsAnswered } = useIsAnswered((state) => ({
    setIsAnswered: state.setIsAnswered,
  }));
  const { user } = useAuth();
  const { conversationId: conId } = useConversations((state) => ({
    conversationId: state.conversationId,
  }));

  const conversationId = typeof conId === "string" ? conId : "";
  const id = user && typeof user.id == "string" ? user.id : "id";
  const name = user && typeof user.name == "string" ? user.name : "User";
  const getMeetingAndToken = async () => {
    const meetingId = await createMeeting({ token: token });
    return meetingId;
  };
  const onMeetingLeave = () => {
    setMeetingId(null);
  };
  const callVariant = async (callType: "VideoOn" | "VideoOff") => {
    callType == "VideoOn" ? setWebcamEnabled(true) : setWebcamEnabled(false);
    await getMeetingAndToken().then(async (meetingId) => {
      setMeetingId(meetingId);
      await setDoc(doc(db, "calls", conversationId), {
        conversationId,
        meetingId,
        callUser: id,
      });
    });
    setProceedCall(true);
  };
  useEffect(() => {
    const q = query(
      collection(db, "calls"),
      where("conversationId", "==", conversationId)
    );
    onSnapshot(q, (snapshot) => {
      {
        snapshot.docChanges().forEach((change) => {
          if (change.type == "added" || change.type == "modified") {
            const data = change.doc.data();
            setIsAnswered(data.isAnswered);
            setMeetingId(data.meetingId);
          }
        });
      }
    });
  }, []);
  return (
    <div className="absolute top-0 left-0 w-full pageScreen bg-black bg-opacity-50 flex center  z-50 ">
      {meetingId && token ? (
        <MeetingProvider
          config={{
            meetingId,
            micEnabled: true,
            webcamEnabled,
            name,
          }}
          token={token}
        >
          <CallView
            meetingId={meetingId}
            conversationId={conversationId}
            onMeetingLeave={onMeetingLeave}
          />
        </MeetingProvider>
      ) : (
        !proceedCall && (
          <ChooseCallVariantModal videoOrAudioCall={callVariant} />
        )
      )}
    </div>
  );
}
