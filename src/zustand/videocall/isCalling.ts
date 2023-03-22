import { create } from "zustand";
interface IisCalling {
  isCalling: boolean;
  setIsCalling: (value: boolean) => void;
}
export const useIsCalling = create<IisCalling>((set) => ({
  isCalling: false,
  setIsCalling: (value: boolean) => {
    set({ isCalling: value });
  },
}));
