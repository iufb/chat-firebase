import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface VideoButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type: "decline" | "microphone" | "webcam" | "call";
}
