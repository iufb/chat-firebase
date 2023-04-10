import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const envs = import.meta.env;
const firebaseConfig = {
  apiKey: envs.VITE_FIREBASE_APIKEY,
  authDomain: envs.VITE_FIREBASE_AUTHDOMAIN,
  databaseURL: envs.VITE_FIREBASE_DATABASE,
  projectId: envs.VITE_FIREBASE_PROJECT_ID,
  storageBucket: envs.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envs.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: envs.VITE_FIREBASE_APPID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
export const realtimeDb = getDatabase(app);
