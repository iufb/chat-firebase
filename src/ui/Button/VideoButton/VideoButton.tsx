import { VideoButtonProps } from "./VideoButton.props";
import { ReactComponent as CallIcon } from "../../../assets/call.svg";
import { ReactComponent as DeclineIcon } from "../../../assets/decline.svg";
import { ReactComponent as MicrophoneIcon } from "../../../assets/microphone.svg";
import { ReactComponent as WebcamIcon } from "../../../assets/webcam.svg";
export const VideoButton = ({
  type,
  className,
  ...props
}: VideoButtonProps): JSX.Element => {
  const getIcon = (type: string): JSX.Element | null => {
    switch (type) {
      case "call":
        return <CallIcon />;
      case "decline":
        return <DeclineIcon />;
      case "microphone":
        return <MicrophoneIcon />;
      case "webcam":
        return <WebcamIcon />;
      default:
        return null;
    }
  };
  return (
    <button
      className={`${className} w-14 h-14 p-4 rounded-full flex center  ${
        type == "decline" ? "bg-red-400 fill-gray-50" : "bg-gray-300"
      }
`}
      {...props}
    >
      {getIcon(type)}
    </button>
  );
};
