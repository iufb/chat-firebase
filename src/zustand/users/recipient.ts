import { DocumentData } from "firebase/firestore";
import { create } from "zustand";
import { auth } from "../../firebase/firebase";
interface IuseRecipient {
  recipient?: DocumentData | string | null;
  setRecipient: (recipient: DocumentData) => void;
}

export const useRecipient = create<IuseRecipient>((set) => ({
  recipient: localStorage.getItem("recipient"),
  setRecipient: (recipient) => {
    if (auth.currentUser && auth.currentUser.uid !== recipient.id)
      localStorage.setItem("recipient", JSON.stringify(recipient));
    set({
      recipient,
    });
  },
}));
