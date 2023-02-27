import { DetailedHTMLProps, HTMLAttributes } from "react";
import { MessageType } from "../../helpers/types/types";
export interface MessageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  message: MessageType;
}
