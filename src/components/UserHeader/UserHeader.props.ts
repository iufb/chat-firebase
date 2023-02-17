import { DocumentData } from "firebase/firestore";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CurrentUser } from "../../helpers/types/types";
interface Iuser<T extends CurrentUser | DocumentData> {
  user: T extends CurrentUser ? CurrentUser : DocumentData;
}
export interface UserHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  user: CurrentUser | null | DocumentData;
}
