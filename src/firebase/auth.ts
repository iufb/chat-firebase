import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { IForm } from "../components/forms/IForm.interface";
import { IUpdateUserForm } from "../components/forms/UpdateUserForm/IUpdateUserForm";
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
  return signOut(auth);
};
export const updateUser = (updateFormData: IUpdateUserForm) => {
  if (auth.currentUser)
    return updateProfile(auth.currentUser, {
      displayName: `${updateFormData.firstName} ${updateFormData.lastName}`,
      photoURL: updateFormData.photoURL,
    });
};
