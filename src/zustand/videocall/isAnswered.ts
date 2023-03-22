import { create } from "zustand";
interface IisAnswered {
  isAnswered: boolean;
  setIsAnswered: (value: boolean) => void;
}
export const useIsAnswered = create<IisAnswered>((set) => ({
  isAnswered: false,
  setIsAnswered: (value: boolean) => {
    set({ isAnswered: value });
  },
}));
