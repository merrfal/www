import * as Envs from "./Envs"

import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { Translation } from "../utils/Translations"

let Firebase
let Storage
let Auth

const Config = {
  apiKey: Envs.FB_API_KEY,
  authDomain: Envs.FB_AUTH_DOMAIN,
  projectId: Envs.FB_PROJECT_ID,
  storageBucket: Envs.FB_STORAGE_BUCKET,
  messagingSenderId: Envs.FB_MESSAGING_SENDER_ID,
  appId: Envs.FB_APP_ID,
}

try {
  Firebase = initializeApp(Config)
  Storage = getStorage(Firebase)
  Auth = getAuth(Firebase)
} 

catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error(Translation("firebase-init-error"), err.stack)

    document.body.innerHTML = `<h1>
      ${Translation("firebase-init-error")}
    </h1>`
  }
}

export { Storage, Auth}
export default Firebase