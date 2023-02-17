import { DocumentData } from "firebase/firestore";
import { create } from "zustand";
import { getAllUsers } from "../../firebase/users";
import { CurrentUser } from "../../helpers/types/types";
interface IuserAllUsers {
  users?: DocumentData[];
  getUsers: () => void;
}

export const useAllUsers = create<IuserAllUsers>((set) => ({
  getUsers: () => {
    getAllUsers().then((data) => {
      set({
        users: data,
      });
    });
  },
}));
