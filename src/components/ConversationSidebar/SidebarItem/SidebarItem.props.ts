import { DocumentData } from "firebase/firestore";
import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface SidebarItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  conversation: DocumentData;
}
