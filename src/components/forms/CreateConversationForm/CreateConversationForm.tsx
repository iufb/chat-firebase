import { useRef } from "react";
import { useForm } from "react-hook-form";
import { CreateConversation } from "../../../firebase/conversations";
import { useAuth } from "../../../helpers/hooks/useAuth";
import { useOnClickOutside } from "../../../helpers/hooks/useOnClickOutside";
import { useShowCreateModal } from "../../../helpers/hooks/useShowCreateModal";
import { Button, Input } from "../../../ui";
import { ICreateConversationForm } from "./ICreateConversationForm";
import { ReactComponent as CloseIcon } from "../../../assets/close.svg";
export const CreateConversationForm = () => {
  const { register, handleSubmit } = useForm<ICreateConversationForm>();
  const { user } = useAuth();
  const { setIsShow } = useShowCreateModal();
  const formRef = useRef<HTMLFormElement>(null);
  useOnClickOutside(formRef, () => setIsShow(false));
  const onSubmit = (data: ICreateConversationForm) => {
    if (user) {
      CreateConversation(user?.id, data.recipientId);
      setIsShow(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[600px] flex flex-col gap-2 bg-gray-700 p-4 rounded-md relative"
      ref={formRef}
    >
      <h1 className="text-3xl text-white text-center">Create Conversation</h1>
      <CloseIcon
        className="w-6 h-6 fill-white absolute top-2 right-4 cursor-pointer"
        onClick={() => setIsShow(false)}
      />
      <Input
        type="text"
        id="Recipient"
        {...register("recipientId", { required: true })}
      />
      <Button variant="dark" className="w-full">
        Create
      </Button>
    </form>
  );
};
