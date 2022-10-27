import { auth } from "config/firebase.config";

export type IRegisterUsername = void;

export type IRegister = auth.UserCredential;

export type UserRegistered = string[];