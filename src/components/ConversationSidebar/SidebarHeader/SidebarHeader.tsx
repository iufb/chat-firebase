import { ReactComponent as NewConversationIcon } from "../../../assets/NewConversation.svg";
import { useShowCreateModal } from "../../../helpers/hooks/useShowCreateModal";
import { Button } from "../../../ui";
import { CreateConversationModal } from "../../modals/CreateConversationModal/CreateConversationModal";
export const SidebarHeader = (): JSX.Element => {
  const { isShow, setIsShow } = useShowCreateModal();
  return (
    <div className=" border-b border-gray-300">
      <div className="p-2 flex justify-between">
        <h2 className="text-2xl ">Messages</h2>
        <Button variant="icon" onClick={() => setIsShow(true)}>
          <NewConversationIcon />
        </Button>
      </div>
      {isShow && <CreateConversationModal />}
    </div>
  );
};
