import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { addUser } from "../../firebase/users";
import { useUser } from "../../zustand/auth/auth";
export const useAuth = () => {
  const { user, setUser } = useUser((state) => ({
    user: state.user,
    setUser: state.setUser,
  }));
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (typeof user === "undefined") {
        setUser(null);
      }
      setUser(user);
    });
    return unSubscribe;
  }, []);
  useEffect(() => {
    addUser(user);
  }, []);
  return { user, setUser };
};
