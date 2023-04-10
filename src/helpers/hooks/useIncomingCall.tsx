import { useMeeting } from "@videosdk.live/react-sdk";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../firebase/firebase";
import { useCallStatus } from "../../zustand/videocall/callStatus";
import { useStartCall } from "../../zustand/videocall/startCall";
import { useAuth } from "./useAuth";

export const useIncomingCall = () => {
  const { callStatus, setCallStatus } = useCallStatus();
  const { startCall, setStartCall } = useStartCall((state) => ({
    startCall: state.startCall,
    setStartCall: state.setStartCall,
  }));
  const { user } = useAuth();
  const userId = user && typeof user.id == "string" ? user.id : "";
  useEffect(() => {
    setStartCall(false);
    setCallStatus("NoCalls");
  }, []);
  const onSubscribe = () => {
    const q = query(collection(db, "users"), where("id", "==", userId));
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type == "modified") {
          const data = change.doc.data();
          if (data.calls) {
            setCallStatus(data.calls.callStatus);
          }
        }
      });
    });
  };
  onSubscribe();
  useEffect(() => {
    if (callStatus == "Calling") {
      setStartCall(true);
    }
  }, [callStatus]);
};
