import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
export const createUser = ()=>{
createUserWithEmailAndPassword(auth, "misakilover228@gmail.com", "19931991r")
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`${errorCode} ${errorMessage}`)
    // ..
  });
}
export const singIn = () => {
 signInWithEmailAndPassword(auth, "misakilover228@gmail.com", "19931991r")
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`${errorCode} ${errorMessage}`)
    // ..
  });
 
}
export const getStatus = () =>{
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
  }
});
}

