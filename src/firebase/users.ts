import { doc, getDoc, setDoc } from "firebase/firestore";
import { CurrentUser } from "../helpers/types/types";
import { db } from "./firebase";

export const addUser = async (user: CurrentUser | null | undefined) => {
  if (user)
    await setDoc(
      doc(db, "users", user.id),
      {
        id: user.id,
        email: user.email,
        name: user.displayName,
        avatar: user.photoURL,
      },
      { merge: true }
    );
};
export const getUser = async (id: string | undefined) => {
  if (!id) return;
  const userRef = doc(db, "users", id);
  const user = await getDoc(userRef);
  if (!user.exists()) {
    throw new Error("User not found");
  }
  const data = user.data();

  return data;
};
