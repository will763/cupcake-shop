import { authApp, auth } from "config/firebase.config";
import { ILogin } from "./model";


export const loginWithEmailAndPassword = ({ email, password }: ILogin) => {
    return auth.signInWithEmailAndPassword(authApp, email, password);
}
