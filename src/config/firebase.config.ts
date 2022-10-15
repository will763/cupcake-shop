import * as firebase from "firebase/app";
import * as auth from 'firebase/auth'
import { getAuth } from "firebase/auth";
import { collection, Firestore, getFirestore } from "firebase/firestore";

import {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID,
} from 'react-native-dotenv'

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
};

const app = firebase.initializeApp(firebaseConfig);

const db = getFirestore(app);

const authApp = getAuth(app);

export { auth, authApp, db }
