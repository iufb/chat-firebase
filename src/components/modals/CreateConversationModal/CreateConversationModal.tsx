import { CreateConversationForm } from "../../forms/CreateConversationForm/CreateConversationForm";

export const CreateConversationModal = (): JSX.Element => {
  return (
    <div className=" absolute top-0 left-0 pageScreen bg-black bg-opacity-50 flex center  z-50">
      <CreateConversationForm />
    </div>
  );
};
