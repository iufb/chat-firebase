import { ReactComponent as NewConversationIcon } from "../../../assets/NewConversation.svg";
export const SidebarHeader = (): JSX.Element => {
  return (
    <div className=" border-b border-gray-300">
      <div className="p-2 flex justify-between">
        <h2 className="text-2xl ">Messages</h2>
        <NewConversationIcon />
      </div>
    </div>
  );
};
