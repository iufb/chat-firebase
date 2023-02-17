import { useCreateConversationModal } from "../../zustand/modals/modal";

export const useShowCreateModal = () => {
  const { isShow, setIsShow } = useCreateConversationModal((state) => ({
    isShow: state.isShow,
    setIsShow: state.setIsShow,
  }));
  return { isShow, setIsShow };
};
