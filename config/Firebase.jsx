import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes
} from "firebase/storage";

const Config = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FB_APP_ID,
};

let Firebase;
let FB_ERROR = 'Firebase initialization error.';

try { Firebase = initializeApp(Config) }
catch (err) { if (!/already exists/.test(err.message)) console.error(FB_ERROR, err.stack) }
// Firebase storage reference
const storage = getStorage(Firebase);
export { storage, ref, uploadBytesResumable,uploadBytes, getDownloadURL };

export const FirebaseAuth = getAuth(Firebase);
export default Firebase;