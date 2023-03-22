import { create } from "zustand";
interface IStartCall {
  startCall: boolean;
  setStartCall: (value: boolean) => void;
}
export const useStartCall = create<IStartCall>((set) => ({
  startCall: false,
  setStartCall: (value: boolean) => {
    set({ startCall: value });
  },
}));
