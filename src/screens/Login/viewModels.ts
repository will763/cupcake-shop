import { auth, authApp } from "config/firebase.config";
import { sendPasswordResetEmail } from "firebase/auth";
import { Login } from "./model";

const useLoginViewModel = () => {

    async function newLogin(email: string, password: string): Login {
        return auth.signInWithEmailAndPassword(authApp, email, password);
    }

    async function loginGoogleCredential(credential: auth.OAuthCredential): Login {
        return auth.signInWithCredential(authApp, credential)
    }

    async function updatePassword(email: string): Promise<void> {
        return sendPasswordResetEmail(authApp, email)
    }

    return {
        newLogin,
        loginGoogleCredential,
        updatePassword
    }
}

export default useLoginViewModel;