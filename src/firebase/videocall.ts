import { deleteField, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export const declineCall = async (
  conversationId: string,
  recipientId: string
) => {
  await setDoc(doc(db, "calls", conversationId), {
    meetingId: null,
    callStatus: "Declined",
  });
  await updateDoc(doc(db, "users", recipientId), { calls: deleteField() });
};
