import { create } from "zustand";
type callStatusType = "Calling" | "Answered" | "Declined" | "NoCalls";
interface IuseCallStatus {
  callStatus: callStatusType;
  setCallStatus: (status: callStatusType) => void;
}
const useCall = create<IuseCallStatus>((set) => ({
  callStatus: "NoCalls",
  setCallStatus: (status) => {
    set({
      callStatus: status,
    });
  },
}));
export const useCallStatus = () => {
  const { callStatus, setCallStatus } = useCall((state) => ({
    callStatus: state.callStatus,
    setCallStatus: state.setCallStatus,
  }));
  return { callStatus, setCallStatus };
};
