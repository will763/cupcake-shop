import { auth, authApp } from "config/firebase.config";
import { Login } from "./model";

const useLoginViewModel = () => {

    async function newLogin(email: string, password: string): Login {
        return auth.signInWithEmailAndPassword(authApp, email, password);
    }

    async function loginGoogleCredential(credential: auth.OAuthCredential): Login {
        return auth.signInWithCredential(authApp, credential)
    }

    return {
        newLogin,
        loginGoogleCredential
    }
}

export default useLoginViewModel;