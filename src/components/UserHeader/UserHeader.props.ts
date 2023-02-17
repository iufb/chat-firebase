import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CurrentUser } from "../../helpers/types/types";
export interface UserHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  user: CurrentUser | null;
}
