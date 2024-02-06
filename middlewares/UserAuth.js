import Firebase from 'firebase-admin'

import { FB_SERVICE, FB_STORAGE_BUCKET } from '@/data'

if (!Firebase.apps.length) {
    Firebase.initializeApp({ 
        credential: Firebase.credential.cert(FB_SERVICE),
        storageBucket: FB_STORAGE_BUCKET
    })
}

const UserAuth = async (req) => {
    const authorization = req.headers['authorization']

    if (!authorization) errors.push('missing-user-authentication-token')
    
    else {
        const token = authorization.replace('Bearer ', '')
        const decodedToken = await Firebase.auth().verifyIdToken(token)

        if (decodedToken?.uid) req.body.uid = decodedToken.uid
        else errors.push('user-authentication-token-is-wrong')
    }
}

export default UserAuth