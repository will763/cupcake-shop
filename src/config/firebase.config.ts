import * as firebase from "firebase/app";
import * as auth from 'firebase/auth'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

const app = firebase.initializeApp(firebaseConfig);

const db = getFirestore(app);

const authApp = getAuth(app);

authApp.useDeviceLanguage();


export { auth, authApp, db }
