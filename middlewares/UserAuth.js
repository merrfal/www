import Firebase from 'firebase-admin'

import {
    FB_STORAGE_BUCKET,
    FB_ADMIN_TYPE,
    FB_ADMIN_PROJECT_ID,
    FB_ADMIN_PRIVATE_KEY_ID ,
    FB_ADMIN_PRIVATE_KEY,
    FB_ADMIN_CLIENT_EMAIL,
    FB_ADMIN_CLIENT_ID,
    FB_ADMIN_AUTH_URI,
    FB_ADMIN_TOKEN_URI,
    FB_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
    FB_ADMIN_CLIENT_X509_CERT_URL,
    FB_ADMIN_UNIVERSE_DOMAIN
} from '../configs/Envs'

if (!Firebase.apps.length) {
    Firebase.initializeApp({ 
        storageBucket: FB_STORAGE_BUCKET,
        credential: Firebase.credential.cert({
            type: FB_ADMIN_TYPE,
            project_id: FB_ADMIN_PROJECT_ID,
            private_key_id: FB_ADMIN_PRIVATE_KEY_ID,
            private_key: FB_ADMIN_PRIVATE_KEY,
            client_email: FB_ADMIN_CLIENT_EMAIL,
            client_id: FB_ADMIN_CLIENT_ID,
            auth_uri: FB_ADMIN_AUTH_URI,
            token_uri: FB_ADMIN_TOKEN_URI,
            auth_provider_x509_cert_url: FB_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
            client_x509_cert_url: FB_ADMIN_CLIENT_X509_CERT_URL,
            universe_domain: FB_ADMIN_UNIVERSE_DOMAIN
        })
    })
}

const UserAuth = async (req) => {
    const authorization = req.headers['authorization']


    if (!authorization) false
    
    else {
        const token = authorization.replace('Bearer ', '')
        const decodedToken = await Firebase.auth().verifyIdToken(token)

        if (decodedToken?.uid) return decodedToken.uid
        else return false
    }
}

export default UserAuth