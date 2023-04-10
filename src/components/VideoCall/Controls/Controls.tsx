import { useMeeting } from "@videosdk.live/react-sdk";
import { useCallback, useEffect } from "react";
import { declineCall } from "../../../firebase/videocall";
import { VideoButton } from "../../../ui";
import { useConversations } from "../../../zustand/conversations/conversations";
import { useRecipient } from "../../../zustand/users/recipient";
import { useCallStatus } from "../../../zustand/videocall/callStatus";
import { useStartCall } from "../../../zustand/videocall/startCall";
import { ControlsProps } from "./Controls.props";

function Controls({ className, ...props }: ControlsProps) {
  const { leave, toggleMic, toggleWebcam } = useMeeting();
  const { startCall, setStartCall } = useStartCall((state) => ({
    setStartCall: state.setStartCall,
    startCall: state.startCall,
  }));
  const { conversationId: conId } = useConversations((state) => ({
    conversationId: state.conversationId,
  }));
  const { recipient: rec } = useRecipient((state) => ({
    recipient: state.recipient,
  }));

  const recipient = typeof rec == "string" ? JSON.parse(rec) : rec;
  const conversationId = typeof conId == "string" ? conId : "";
  return (
    <div className={` ${className} gap-2 `} {...props}>
      <VideoButton type="webcam" onClick={() => toggleWebcam()} />
      <VideoButton type="microphone" onClick={() => toggleMic()} />
      <VideoButton
        type="decline"
        onClick={() => {
          declineCall(conversationId, recipient.id);
          setStartCall(false);
          leave();
        }}
      />
    </div>
  );
}
export { Controls };
