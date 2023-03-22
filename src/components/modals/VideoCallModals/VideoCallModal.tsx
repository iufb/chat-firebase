import { declineCall } from "../../../firebase/videochat";
import useWebRTC, { LOCAL, REMOTE } from "../../../helpers/hooks/useWebRTC";
import { VideoButton } from "../../../ui";
import { VideoCallModalProps } from "./VideoCallModal/VideoCallModal.props";

export const VideoCallModal = ({
  className,
  conversationId,
  ...props
}: VideoCallModalProps): JSX.Element => {
  const { provideMediaRef } = useWebRTC(conversationId);
  return (
    <div className={`relative group ${className}`} {...props}>
      <video
        ref={(instance) => {
          if (instance) provideMediaRef(REMOTE, instance);
        }}
        autoPlay
        playsInline
        className="w-full max-w-[900px] object-fill h-[600px] bg-gray-200 "
      />
      <video
        ref={(instance) => {
          if (instance) provideMediaRef(LOCAL, instance);
        }}
        autoPlay
        playsInline
        className="max-w-[300px] w-full h-[200px] object-fill bg-red-500 absolute right-2 bottom-2"
      />
      <div className="group-hover:flex group-hover:animate-slideTop  hidden gap-4 absolute bottom-2 left-[40%]">
        <VideoButton type="webcam" />
        <VideoButton type="microphone" />
        <VideoButton
          type="decline"
          onClick={() => declineCall(conversationId)}
        />
      </div>
    </div>
  );
};
