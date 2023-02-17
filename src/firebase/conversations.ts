import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDocs,
  query,
  QuerySnapshot,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export const CreateConversation = async (
  creatorId: string,
  recipientId: string
) => {
  const q = query(
    collection(db, "conversations"),
    where("recipientId", "==", recipientId),
    where("creatorId", "==", creatorId)
  );
  const q2 = query(
    collection(db, "conversations"),
    where("recipientId", "==", creatorId),
    where("creatorId", "==", recipientId)
  );
  const querySnapshot1: QuerySnapshot<DocumentData> = await getDocs(q);
  const querySnapshot2: QuerySnapshot<DocumentData> = await getDocs(q2);
  if (querySnapshot1.docs[0] || querySnapshot2.docs[0]) {
    console.log(querySnapshot1.docs[0]);
    throw new Error("Conversation already exist");
  } else {
    const docRef = await addDoc(collection(db, "conversations"), {
      creatorId,
      recipientId,
    });
    await updateDoc(doc(db, "conversations", docRef.id), {
      id: docRef.id,
    });
  }
};
export const GetConversations = async (id: string) => {
  const q = query(
    collection(db, "conversations"),
    where("recipientId", "==", id),
    where("creatorId", "==", id)
  );
  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
  return querySnapshot.docs;
};
