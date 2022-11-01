import { AuthError, TokenResponse } from "expo-auth-session";

export type FormValues = {
    email: string;
    password: string;
};

export type ResponseType = {
    type: "error" | "success";
    errorCode: string | null;
    error?: AuthError | null | undefined;
    params: Record<string, string>;
    authentication: TokenResponse | null;
    url: string;
}