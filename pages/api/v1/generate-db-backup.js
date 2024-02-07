import Firebase from 'firebase-admin'

import { MongoClient, ObjectId } from "mongodb"
import { mkdirSync, unlinkSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { MONGO_URI } from "../../../configs/Envs"

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

const SECRET = '12321123123wewerwrqq'

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

let cachedDb = null
const storageBucket = Firebase.storage().bucket()

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb
  }

  const client = await MongoClient.connect(MONGO_URI)

  cachedDb = client.db()
  return cachedDb
}

export default async function handler(req, res) {
  if (req.method !== 'POST') res.redirect('https://merrfal.com')

  else {
    const body = req.body

    if (body && body.token) {
      if (body?.token === SECRET) {
        const db = await connectToDatabase()
        const collections = await db.listCollections().toArray()
      
        if (collections.length === 0) return res.status(200).json({ 
          success: false,
          message: "No collections found" 
        })
      
        else {
          const backup = {}
        
          const now = new Date()
          const dateTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`
          const bucket = `backups/db-${dateTime}`
        
          for (const collection of collections) {
            const documents = await db.collection(collection.name).find().toArray()
        
            backup[collection.name] = documents.map((document) => {
              const convertedDocument = {}
        
              for (const [key, value] of Object.entries(document)) {
                if (value instanceof ObjectId) convertedDocument[key] = { $oid: value.toString() }
                else if (value instanceof Date) convertedDocument[key] = { $date: value.toISOString() }
                else convertedDocument[key] = value
              }
        
              return convertedDocument
            })
        
            const localFilePath = join(__dirname, `${bucket}/${collection.name}.json`)
        
            mkdirSync(dirname(localFilePath), { recursive: true })
            writeFileSync(localFilePath, JSON.stringify(backup, null, 2))
        
            await storageBucket.upload(localFilePath, {
              destination: `${bucket}/${collection.name}.json`,
              metadata: {
                contentType: 'application/json',
                cacheControl: 'no-cache',
              },
            })
        
            unlinkSync(localFilePath)
          }

          res.status(200).json({ 
            success: true,
            message: "Backup created successfully."
          })
        }
      }

      else res.status(401).json({ 
        success: false,
        message: "Your are not authorized to access this resource!" 
      })
    }

    else res.status(401).json({ 
      success: false,
      message: "Your are not authorized to access this resource!" 
    })
  }
}