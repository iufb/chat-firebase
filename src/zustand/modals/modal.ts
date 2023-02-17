import { create } from "zustand";

interface IuseCreateConversationModal {
  isShow: boolean;
  setIsShow: (value: boolean) => void;
}
export const useCreateConversationModal = create<IuseCreateConversationModal>(
  (set) => ({
    isShow: false,
    setIsShow: (value: boolean) => {
      set({ isShow: value });
    },
  })
);
