import { DocumentData } from "firebase/firestore";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface CallModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: "call" | "answer";
  recipient: DocumentData;
  decline: () => void;
  answer?: () => void;
}
