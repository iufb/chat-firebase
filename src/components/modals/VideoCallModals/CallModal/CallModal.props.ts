import { DocumentData } from "firebase/firestore";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface CallModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: "call" | "answer";
  conversation: DocumentData;
  callUserId: string;
  userId: string;
  setJoined: React.Dispatch<React.SetStateAction<string>>;
}
