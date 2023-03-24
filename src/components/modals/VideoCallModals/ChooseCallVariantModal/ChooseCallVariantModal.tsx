import { VideoButton } from "../../../../ui";
import { ReactComponent as CloseIcon } from "../../../../assets/close.svg";
import { ChooseCallVariantModalProps } from "./ChooseCallVariantModal.props";
import { useStartCall } from "../../../../zustand/videocall/startCall";
export const ChooseCallVariantModal = ({
  videoOrAudioCall,
  className,
  ...props
}: ChooseCallVariantModalProps): JSX.Element => {
  const { setStartCall } = useStartCall((state) => ({
    setStartCall: state.setStartCall,
  }));
  return (
    <div
      className={`flex relative flex-col ${className} max-w-[200px] h-[150px]  w-full gap-4 center bg-gray-700 p-4 rounded-md`}
      {...props}
    >
      <CloseIcon
        className=" absolute fill-white right-1 top-1 w-5 cursor-pointer"
        onClick={() => setStartCall(false)}
      />
      <h1 className="text-2xl text-white"> Call type: </h1>
      <div className="flex gap-4">
        <VideoButton
          type="webcam"
          onClick={() => videoOrAudioCall("VideoOn")}
        />
        <VideoButton type="call" onClick={() => videoOrAudioCall("VideoOff")} />
      </div>
    </div>
  );
};
