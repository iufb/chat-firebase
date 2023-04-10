import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export interface DropdownProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  children: ReactNode;
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}
