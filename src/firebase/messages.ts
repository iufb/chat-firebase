import {
  onValue,
  orderByChild,
  push,
  query,
  ref,
  serverTimestamp,
  set,
  limitToLast,
} from "firebase/database";
import { CurrentUser, MessageType } from "../helpers/types/types";
import { realtimeDb } from "./firebase";

export const sendMessage = (
  conversationId: string,
  creator: CurrentUser,
  message: string
) => {
  const listRef = ref(realtimeDb, "messages/" + conversationId);
  const newListRef = push(listRef);
  set(newListRef, {
    content: message,
    timestamp: serverTimestamp(),
    avatar: creator.avatar,
    name: creator.name,
    id: conversationId,
  });
};
export const getMessages = (
  conversationId: string,
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const messageRef = query(
    ref(realtimeDb, "messages/" + conversationId),
    orderByChild("timestamp")
  );
  onValue(messageRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      setMessages(Object.values(data));
    } else {
      setIsLoading(false);
    }
  });
};
export const getLastMessage = (
  conversationId: string,
  setLastMessage: React.Dispatch<React.SetStateAction<MessageType | null>>
) => {
  const messageRef = query(
    ref(realtimeDb, "messages/" + conversationId),
    limitToLast(1)
  );
  onValue(messageRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const message = [...(Object.values(data) as MessageType[])][0];
      setLastMessage(message);
    }
  });
};
