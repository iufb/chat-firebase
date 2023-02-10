import { UserCredential } from "firebase/auth";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { IForm } from "./IForm.interface";
export interface FormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  title: "Register" | "Log in";
  eventHandler: (data: IForm) => Promise<UserCredential>;
  path: string;
}
