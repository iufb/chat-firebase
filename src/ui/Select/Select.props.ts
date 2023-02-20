import { DocumentData } from "firebase/firestore";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface SelectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  users: DocumentData[];
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setSelectedUser: React.Dispatch<React.SetStateAction<DocumentData>>;
  setShowList: React.Dispatch<React.SetStateAction<boolean>>;
}
