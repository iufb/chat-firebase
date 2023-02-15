import { create } from "zustand";
import { User } from "firebase/auth";
import { CurrentUser } from "../../helpers/types/types";
interface IuseUser {
  user?: CurrentUser | null;
  setUser: (user: User | null) => void;
}
export const useUser = create<IuseUser>((set) => ({
  loading: false,
  setUser: (user: User | null) => {
    if (user) {
      set({
        user: {
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
      });
    } else {
      set({ user: null });
    }
  },
}));
