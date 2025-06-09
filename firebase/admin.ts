
const { getApps, getAuth, initializeApp, cert } = require('firebase-admin/app');

const initFirebaseAdmin = () => {
    const apps = getApps() 

    if(!apps.length){
        initializeApp({
            credential: cert({
                projectId:process.env.FIREBASE_PROJECT_ID, 
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL, 
                privatekey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n")
            })
        })
    }

    return {
        auth: getAuth()
    }
}