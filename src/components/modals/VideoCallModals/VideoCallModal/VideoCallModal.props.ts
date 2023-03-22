import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface VideoCallModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  conversationId: string;
}
