import { auth } from "config/firebase.config";

export type Login = Promise<auth.UserCredential>