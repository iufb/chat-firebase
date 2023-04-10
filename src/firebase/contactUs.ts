import { doc, setDoc } from "firebase/firestore";
import { IContactForm } from "../components/forms/ContactUsForm/IContactUsForm";
import { db } from "./firebase";

export const contactUs = async (data: IContactForm) => {
  await setDoc(doc(db, "contactUs", data.email), data, { merge: true });
};
