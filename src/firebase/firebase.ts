import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA6nTQ6W5pIGfPNNmoQXG0WPn0Vbsf7ZnA",
  authDomain: "chat-a754f.firebaseapp.com",
  projectId: "chat-a754f",
  storageBucket: "chat-a754f.appspot.com",
  messagingSenderId: "364713763255",
  appId: "1:364713763255:web:2ea467536afff309c60832",
  databaseURL:
    "https://chat-a754f-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
export const realtimeDb = getDatabase(app);
