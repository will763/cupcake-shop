import { FieldErrorsImpl } from "react-hook-form";
import { showMessage } from "react-native-flash-message";

type ObjectKey = keyof typeof loginErrorTypes;

const loginErrorTypes = {
    "Firebase: Error (auth/user-not-found).": 'email not found',
    "Firebase: Error (auth/wrong-password).": 'wrong password',
    "Firebase: Error (auth/invalid-email).": 'email must be a valid email',
    "invalid email": "email must be a valid email",
    "email required": "email is a required field",
    "password required": "password is a required field",
    "short password": "password must be at least 6 characters"
}

export function handleErrors(errors: Partial<FieldErrorsImpl<{ email: string, password: string }>>) {
    if (errors.email) {
        if (errors.email.type === 'required') { triggerError('email required') }
        if (errors.email.type === 'email') { triggerError('invalid email') }
    } else if (errors.password) {
        if (errors.password.type === 'required') { triggerError('password required') }
        if (errors.password.type === 'min') { triggerError('short password') }
    }
}

export function triggerError(message: string) {

    showMessage({
        message: "Login Error",
        description: loginErrorTypes[message as ObjectKey] ?? "something went wrong",
        type: "default",
        backgroundColor: "#fefefe",
        color: '#ff0000',
        duration: 5000,
        titleStyle: { fontSize: 18 },
        hideOnPress: true,
    });

}