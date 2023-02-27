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
import { CurrentUser } from "../helpers/types/types";
import { db } from "./firebase";

export const CreateConversation = async (
  creator: CurrentUser,
  recipient: DocumentData
) => {
  const q = query(
    collection(db, "conversations"),
    where("recipient.id", "==", recipient.id),
    where("creator.id", "==", creator.id)
  );
  const q2 = query(
    collection(db, "conversations"),
    where("recipient.id", "==", creator.id),
    where("creator.id", "==", recipient.id)
  );
  const querySnapshot1: QuerySnapshot<DocumentData> = await getDocs(q);
  const querySnapshot2: QuerySnapshot<DocumentData> = await getDocs(q2);
  if (querySnapshot1.docs[0] || querySnapshot2.docs[0]) {
    throw new Error("Conversation already exist");
  } else {
    const docRef = await addDoc(collection(db, "conversations"), {
      creator,
      recipient,
    });
    await updateDoc(doc(db, "conversations", docRef.id), {
      id: docRef.id,
    });
  }
};
export const GetConversations = async (id: string) => {
  const q1 = query(
    collection(db, "conversations"),
    where("creator.id", "==", id)
  );
  const q2 = query(
    collection(db, "conversations"),
    where("recipient.id", "==", id)
  );
  const querySnapshot1: QuerySnapshot<DocumentData> = await getDocs(q1);
  const querySnapshot2: QuerySnapshot<DocumentData> = await getDocs(q2);
  const list = querySnapshot2.docs
    .map((doc) => doc.data())
    .concat(querySnapshot1.docs.map((doc) => doc.data()));
  return list;
};
export const updateLastMessage = async (
  conversationId: string,
  lastMessage: string
) => {
  await updateDoc(doc(db, "conversations", conversationId), {
    lastMessage,
  });
};
