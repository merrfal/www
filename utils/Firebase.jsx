import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { Translation } from "./Translations"
import { Storage } from "../configs/Firebase"

export const isStorageReadable = (url) => {
    if ([null, undefined, ""].includes(url)) return false

    const FirebaseNotReadableModifiers = ["http", "https", "://", "."]
    const isFromStorage = FirebaseNotReadableModifiers.forEach((modifier) => {
        if (url.includes(modifier)) return false
    })

    return isFromStorage
}

export const UploadFileToFirebase = async (file, path, dispatch) => {
    const id = crypto.randomUUID()

    const imageReference = ref(Storage, `${path}/${id}`)
    const imageUpload = uploadBytesResumable(imageReference, file)

    try {
        const snapshot = await imageUpload
        const url = await getDownloadURL(snapshot.ref)

        return {
            success: true,
            data: url,
        }
    } 

    catch (error) {
        const alert = {
            type: "error",
            message: Translation("couldnt-upload-to-firebase"),
            dispatch,
        }
        
        Notification(alert)

        return {
            success: false,
            data: JSON.stringify(error),
        }
    }
}