import Firebase from 'firebase-admin'
import { GITHUB_ACTION_SECRET } from "../../../configs/Envs"

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
} from '../../../configs/Envs'

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

const storageBucket = Firebase.storage().bucket()

function OlderThanThreeDays(date) {
    const threeDaysAgo = new Date()
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)
    return date < threeDaysAgo
}

export default async function handler(req, res) {
    try {
        if (req.method !== 'POST') res.redirect('https://merrfal.com')

        else {
            const body = req.body
            
            if (body && body.token && body.token === GITHUB_ACTION_SECRET) {
                const [files] = await storageBucket.getFiles({ prefix: 'backups' })

                res.status(200).json({ 
                    success: true,
                    message: "Clenup check completed successfully." 
                })

                for (const file of files) {
                    const metadata = await file.getMetadata()
                    const creationDate = new Date(metadata[0].timeCreated)
                    
                    if (OlderThanThreeDays(creationDate)) await file.delete()
                }
            }

            else res.status(401).json({ 
                success: false,
                message: "Your are not authorized to access this resource!" 
            })
        }
    }

    catch (error) {
        console.error(error)

        res.status(500).json({ 
            success: false,
            message: "Internal server error." 
        })
    }
}

export const config = {
  api: {
    bodyParser: true
  }
}