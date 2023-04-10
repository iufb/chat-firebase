/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VIDEO_SDK_TOKEN: string;
  readonly VITE_FIREBASE_APIKEY: string;
  readonly VITE_FIREBASE_AUTHDOMAIN: string;
  readonly VITE_FIREBASE_DATABASE: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGINGSENDERID: string;
  readonly VITE_FIREBASE_APPID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
