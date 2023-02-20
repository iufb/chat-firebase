import { DocumentData } from "firebase/firestore";
import { create } from "zustand";
import { GetConversations } from "../../firebase/conversations";

interface IuseConversations {
  conversations?: DocumentData[];
  fetchConversations: (id: string) => void;
}

export const useConversations = create<IuseConversations>((set) => ({
  fetchConversations: (id) => {
    GetConversations(id).then((data) => {
      set({
        conversations: data,
      });
    });
  },
}));
