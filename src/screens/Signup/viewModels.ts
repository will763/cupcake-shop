import { auth, authApp, db } from "config/firebase.config";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

import uuid from 'react-native-uuid';

import { IRegister, IRegisterUsername, UserRegistered } from './model'

const useSignupViewModel = () => {
    function registerUsername(username: string): Promise<IRegisterUsername> {
        const myDoc = doc(db, 'user', uuid.v4() as string);

        const docData = {
            username: username,
        }

        return setDoc(myDoc, docData);
    }


    function createNewUser(email: string, password: string): Promise<IRegister> {
        return auth.createUserWithEmailAndPassword(authApp, email, password)
    }

    async function signupGoogleCredential(credential: auth.OAuthCredential): Promise<IRegister> {
        return auth.signInWithCredential(authApp, credential)
    }

    async function getRegisteredUsers(): Promise<UserRegistered> {
        const docs = await getDocs(collection(db, "user"));

        const documents: Array<string> = [];

        docs.forEach((doc) => {
            documents.push(doc.data().username);
        })

        return documents;
    }

    return {
        registerUsername,
        createNewUser,
        getRegisteredUsers,
        signupGoogleCredential
    }
}

export default useSignupViewModel;

