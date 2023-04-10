import { useMeeting } from "@videosdk.live/react-sdk";
import { useEffect } from "react";
import { useCallStatus } from "../../../zustand/videocall/callStatus";
import { useStartCall } from "../../../zustand/videocall/startCall";
import { Controls } from "../Controls/Controls";
import { ParticipantLayoutProps } from "./ParticipantLayout.props";

export const ParticipantLayout = ({
  children,
  className,
  ...props
}: ParticipantLayoutProps) => {
  const { leave } = useMeeting();
  const { callStatus } = useCallStatus();
  const { setStartCall } = useStartCall((state) => ({
    setStartCall: state.setStartCall,
  }));
  useEffect(() => {
    if (callStatus == "Declined") {
      leave();
      setStartCall(false);
      console.log("all decl");
    }
  }, []);
  return (
    <div
      className={`relative group max-w-[1280px] w-fit h-fit max-h-[720px] flex-col xl:flex-row  py-2  center gap-2 ${className}`}
      {...props}
    >
      {children}
      <Controls className="hidden  group-hover:inline-flex group-hover:absolute  group-hover:bottom-0" />
    </div>
  );
};
