import { useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef } from "react";
import ReactPlayer from "react-player";
import { ReactComponent as MicrophoneIcon } from "../../assets/no-mic.svg";
import { useIsMobile } from "../../helpers/hooks/useIsMobile";
function ParticipantView({ participantId }: { participantId: string }) {
  const micRef = useRef<HTMLVideoElement>(null);
  const { isMobile } = useIsMobile();
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(participantId);
  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);
  return (
    <div className="relative">
      <audio ref={micRef} autoPlay playsInline muted={isLocal} />
      <MicrophoneIcon
        className={`lg:text-3xl text-xl fill-gray-900 absolute left-1 top-1 ${
          micOn ? "hidden" : "block"
        }`}
      />
      {webcamOn ? (
        <div>
          <ReactPlayer
            //
            width={isMobile ? 320 : 640}
            height={isMobile ? 180 : 360}
            playsinline // very very imp prop
            pip={false}
            light={false}
            controls={false}
            muted={true}
            playing={true}
            //
            url={videoStream}
            //
            onError={(err) => {
              console.log(err, "participant video error");
            }}
          />
        </div>
      ) : (
        <div className="w-[320px] h-[180px] lg:w-[640px] lg:h-[360px]  bg-gray-600 center text-xl text-slate-100">
          {displayName}
        </div>
      )}
    </div>
  );
}
export { ParticipantView };
