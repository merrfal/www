import * as Constants from "./Constants";
import * as Messages from "./Messages";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { Translation } from "../utils/Translations";

let Firebase;
let Storage;
let Auth;

const Config = {
  apiKey: Constants.FB_API_KEY,
  authDomain: Constants.FB_AUTH_DOMAIN,
  projectId: Constants.FB_PROJECT_ID,
  storageBucket: Constants.FB_STORAGE_BUCKET,
  messagingSenderId: Constants.FB_MESSAGING_SENDER_ID,
  appId: Constants.FB_APP_ID,
};

try {
  Firebase = initializeApp(Config);
  Storage = getStorage(Firebase);
  Auth = getAuth(Firebase);
} 

catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error(Translation("firebase-init-error"), err.stack);
  }
}

export { Storage, Auth};
export default Firebase;
