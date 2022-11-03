import { FieldErrorsImpl } from "react-hook-form";
import { showMessage } from "react-native-flash-message";

type SignupForm = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const signupErrorTypes = {
  "Firebase: Error (auth/invalid-email).": 'invalid email',
  "Firebase: Password should be at least 6 characters (auth/weak-password).": 'Password should be at least 6 characters',
  "Firebase: Error (auth/email-already-in-use).": 'Email already in use',
  "invalid username": 'username already in use',
  "username is a required field": "username is a required field",
  "email is a required field": "email is a required field",
  "email must be a valid email": "email must be a valid email",
  "password is a required field": "password is a required field",
  "confirmPassword is a required field": "confirmPassword is a required field",
  "password must be at least 6 characters": "password must be at least 6 characters",
  "confirmPassword must be at least 6 characters": "Confirm Password must be at least 6 characters",
  "Passwords must match": "Passwords must match"
}

type ObjectKey = keyof typeof signupErrorTypes;


export function handleSignupErrors(errors: Partial<FieldErrorsImpl<SignupForm>>) {
  if(errors.username){
    triggerSignupError(errors.username.message!)
    return;
  }

  if(errors.email){
    triggerSignupError(errors.email.message!)
    return;
  }

  if(errors.password){
    triggerSignupError(errors.password.message!)
    return;
  }

  if(errors.confirmPassword){
    triggerSignupError(errors.confirmPassword.message!)
    return;
  }
}

export function triggerSignupError(message:string){

  console.log(message);
  
        return (
          showMessage({
            message: "Signup Error",
            description: signupErrorTypes[message as ObjectKey] ?? 'something went wrog',
            type: "default",
            backgroundColor: "#fefefe",
            color: '#ff0000',
            duration: 5000,
            titleStyle: { fontSize: 18 },
            hideOnPress: true,
          })
        )
    }