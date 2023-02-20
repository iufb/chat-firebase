import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { CurrentUser } from "../helpers/types/types";
import { db } from "./firebase";

export const addUser = async (user: CurrentUser | null | undefined) => {
  if (user)
    await setDoc(
      doc(db, "users", user.id),
      {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
      },
      { merge: true }
    );
};
export const getUserById = async (id: string | undefined) => {
  if (!id) return;
  const userRef = doc(db, "users", id);
  const user = await getDoc(userRef);
  if (!user.exists()) {
    throw new Error("User not found");
  }
  const data = user.data();

  return data;
};
export const getAllUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot.docs.map((doc) => doc.data());
};
