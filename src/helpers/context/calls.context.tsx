import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { collection, where, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useAuth } from "../hooks/useAuth";
interface ICallsContext {
  isCalling: boolean;
}
export const CallsContext = createContext<ICallsContext>({ isCalling: false });

export const CallsContextProvider = ({
  isCalling,
  children,
}: PropsWithChildren<ICallsContext>): JSX.Element => {
  const [call, setCall] = useState<boolean>(isCalling);
  const { user } = useAuth();
  const userId = user && user.id == "string" ? user.id : "";
  useEffect(() => {
    const ref = query(collection(db, "users"), where("id", "==", userId));
    const onsubscribe = onSnapshot(ref, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type == "added" || change.type == "modified") {
          const data = change.doc.data();
          console.log(data);
          setCall(data.calls.isCalling);
        }
      });
    });
    return () => onsubscribe();
  }, []);
  return (
    <CallsContext.Provider value={{ isCalling: call }}>
      {children}
    </CallsContext.Provider>
  );
};
