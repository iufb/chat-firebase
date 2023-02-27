import { DocumentData } from "firebase/firestore";
import { create } from "zustand";
import { GetConversations } from "../../firebase/conversations";

interface IuseConversations {
  conversationId: string | null;
  setConversationId: (id: string) => void;
  conversations?: DocumentData[];
  fetchConversations: (id: string) => void;
}

export const useConversations = create<IuseConversations>((set) => ({
  conversationId: localStorage.getItem("conversationId")
    ? localStorage.getItem("conversationId")
    : "",
  fetchConversations: (id) => {
    GetConversations(id).then((data) => {
      set({
        conversations: data,
      });
    });
  },
  setConversationId: (id: string) => {
    localStorage.setItem("conversationId", id);
    set({
      conversationId: id,
    });
  },
}));
