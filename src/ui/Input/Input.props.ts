import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface InputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: "email" | "password" | "text";
  id: string;
  color?: string;
  value?: string;
  changeEvent?: React.Dispatch<React.SetStateAction<string>>;
}
