import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { IForm } from "../components/forms/IForm.interface";
import { auth } from "./firebase";

export const createUser = (formData: IForm) => {
  return createUserWithEmailAndPassword(
    auth,
    formData.email,
    formData.password
  );
};
export const singIn = (formData: IForm) => {
  return signInWithEmailAndPassword(auth, formData.email, formData.password);
};
export const logOut = () => {
 return signOut(auth)

}
