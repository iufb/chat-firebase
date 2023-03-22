import { FormEvent, memo, useEffect, useRef, useState } from "react";
import { CreateConversation } from "../../../firebase/conversations";
import { useAuth } from "../../../helpers/hooks/useAuth";
import { useOnClickOutside } from "../../../helpers/hooks/useOnClickOutside";
import { useShowCreateModal } from "../../../helpers/hooks/useShowCreateModal";
import { Button, Input, Select } from "../../../ui";
import { ReactComponent as CloseIcon } from "../../../assets/close.svg";
import { useAllUsers } from "../../../zustand/users/users";
import { DocumentData } from "firebase/firestore";
import { useConversations } from "../../../zustand/conversations/conversations";
export const CreateConversationForm = memo(() => {
  const { user } = useAuth();
  const { users, getUsers } = useAllUsers((state) => ({
    users: state.users,
    getUsers: state.getUsers,
  }));
  const { fetchConversations } = useConversations((state) => ({
    fetchConversations: state.fetchConversations,
  }));

  const { setIsShow } = useShowCreateModal();
  const formRef = useRef<HTMLFormElement>(null);
  useOnClickOutside(formRef, () => setIsShow(false));

  const [selectedName, setSelectedName] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<DocumentData | null>(null);
  const [showList, setShowList] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (user && selectedUser) {
      CreateConversation(user, selectedUser);
      fetchConversations(user.id);
      setIsShow(false);
    }
  };
  const filteredList = () => {
    return (
      users &&
      user &&
      users.filter((userName) => {
        const name: string = userName.name.toLowerCase();
        return (
          name.includes(selectedName.toLowerCase().trim()) &&
          userName.id !== user.id
        );
      })
    );
  };
  const list = filteredList();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="w-full max-w-[600px] flex flex-col gap-2 bg-gray-700 p-4 rounded-md relative"
      ref={formRef}
    >
      <h1 className="text-3xl text-white text-center">Create Conversation</h1>
      <CloseIcon
        className="w-6 h-6 fill-white absolute top-2 right-4 cursor-pointer"
        onClick={() => setIsShow(false)}
      />
      <div className="relative">
        <Input
          type="text"
          id="Recipient"
          value={selectedName}
          changeEvent={setSelectedName}
          onKeyDown={() => setShowList(true)}
          className="relative"
        />
        {list && showList && (
          <Select
            users={list}
            setSelected={setSelectedName}
            setSelectedUser={setSelectedUser}
            setShowList={setShowList}
            className="absolute top-26"
          />
        )}
      </div>

      <Button variant="dark" className="w-full">
        Create
      </Button>
    </form>
  );
});
