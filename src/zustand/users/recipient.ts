import { DocumentData } from "firebase/firestore";
import { create } from "zustand";
interface IuseRecipient {
  recipient?: DocumentData;
  setRecipient: (recipient: DocumentData) => void;
}

export const useRecipient = create<IuseRecipient>((set) => ({
  setRecipient: (recipient) => {
    set({
      recipient,
    });
  },
}));
