import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA6nTQ6W5pIGfPNNmoQXG0WPn0Vbsf7ZnA",
  authDomain: "chat-a754f.firebaseapp.com",
  projectId: "chat-a754f",
  storageBucket: "chat-a754f.appspot.com",
  messagingSenderId: "364713763255",
  appId: "1:364713763255:web:2ea467536afff309c60832",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
