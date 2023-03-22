import { create } from "zustand";
interface IuseCallRoom {
  callId: string;
  room: [string, string] | [];
  setCallRoom: (callId: string, creator: string, recipient: string) => void;
}
export const useCallRoom = create<IuseCallRoom>((set) => ({
  callId: "",
  room: [],
  setCallRoom: (callId, creator, recipient) => {
    set({
      callId,
      room: [creator, recipient],
    });
  },
}));
