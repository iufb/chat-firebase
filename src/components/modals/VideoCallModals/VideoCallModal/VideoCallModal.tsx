import { VideoButton } from "../../../../ui";
import { VideoCallModalProps } from "./VideoCallModal.props";

export const VideoCallModal = ({
  conversationId,
  className,
  ...props
}: VideoCallModalProps): JSX.Element => {
  return (
    <div className={`relative group ${className}`} {...props}>
      <video
        ref={(instance) => {}}
        autoPlay
        playsInline
        className="w-full max-w-[900px] object-fill h-[600px] bg-gray-200 "
      />
      <video
        ref={(instance) => {}}
        autoPlay
        playsInline
        className="max-w-[300px] w-full h-[200px] object-fill bg-red-500 absolute right-2 bottom-2"
      />
      <div className="group-hover:flex group-hover:animate-slideTop  hidden gap-4 absolute bottom-2 left-[40%]">
        <VideoButton type="webcam" />
        <VideoButton type="microphone" />
        <VideoButton type="decline" />
      </div>
    </div>
  );
};
