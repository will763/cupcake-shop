import { auth, authApp } from "config/firebase.config";
import { Login } from "./model";

const useLoginViewModel = () => {
    async function newLogin(email: string, password: string): Promise<Login> {
        return auth.signInWithEmailAndPassword(authApp, email, password);
    }

    return {
        newLogin
    }
}

export default useLoginViewModel;