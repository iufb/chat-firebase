import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export interface ParticipantLayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}
