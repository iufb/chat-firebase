import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC2hk-MU10jE-eRhmcHJdJbLHlDSZcIH2s",
  authDomain: "fb-chat-f15d1.firebaseapp.com",
  databaseURL:
    "https://fb-chat-f15d1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fb-chat-f15d1",
  storageBucket: "fb-chat-f15d1.appspot.com",
  messagingSenderId: "156205631234",
  appId: "1:156205631234:web:4d78a679a4fed2575ea41b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
export const realtimeDb = getDatabase(app);
