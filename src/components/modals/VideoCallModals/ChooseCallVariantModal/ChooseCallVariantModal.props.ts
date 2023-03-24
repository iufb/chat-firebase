import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface ChooseCallVariantModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  videoOrAudioCall: (callType: "VideoOn" | "VideoOff") => void;
}
