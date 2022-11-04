import { yupResolver } from "@hookform/resolvers/yup";
import { useFocusEffect, useIsFocused, useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { FormValues } from "./types";
import { schema } from "./validation";
import useSignupViewModel from "./viewModels";

import SignupSuccess from "components/SignupSuccess";
import { handleSignupErrors, triggerSignupError } from "components/SignupError";
import { AuthSessionResult } from "expo-auth-session";
import { GoogleAuthProvider, OAuthCredential } from "firebase/auth";

const useSignupViewController = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [isSignupping, setIsSignupping] = useState(false);

    const { registerUsername, createNewUser, getRegisteredUsers, signupGoogleCredential } = useSignupViewModel();

    const { control, handleSubmit, formState: { errors }, watch, clearErrors, reset } = useForm<FormValues>({
        resolver: yupResolver(schema),
        criteriaMode: 'firstError'

    });

    useEffect(() => {
        errors && handleSignupErrors(errors)
    }, [errors])

    const [invalidUsername, setInvalidUsername] = useState<string[]>([]);

    const { username } = watch()

    useFocusEffect(
        React.useCallback(() => {
            reset();
        }, [])
    );

    useEffect(() => {
        const getData = async () => {
            const usernames = await getRegisteredUsers();
            setInvalidUsername(usernames)
        }

        if (isFocused) {
            getData();
        }

    }, [isFocused])

    function toLogin() {
        navigation.navigate('login');
    }

    function useSignupWithGoogle(response: AuthSessionResult | null) {
        useEffect(() => {
            if (response?.type === "success") {
                setIsSignupping(true);
                const { id_token } = response.params;
                const credential = GoogleAuthProvider.credential(id_token);
                signupGoogleCredential(credential)
                    .then(() => {
                        SignupSuccess();
                        navigation.navigate('home');
                    })
                    .catch(({ message }) => triggerSignupError(message))
                    .finally(() => setIsSignupping(false));

            }
        }, [response]);
    }

    async function onSubmit({ username, email, password, confirmPassword }: FormValues) {
        await createNewUser(email, password)
            .then(async () => {
                await registerUsername(username)
                    .then(() => {
                        reset()
                        SignupSuccess();
                        navigation.navigate('home');
                    })
                    .catch(({ message }) => triggerSignupError(message));
            }).catch((error) => triggerSignupError(error.message));

    }

    const submitForm = handleSubmit(onSubmit);

    return {
        username,
        invalidUsername,
        toLogin,
        submitForm,
        control,
        errors,
        isSignupping,
        useSignupWithGoogle
    }

}

export default useSignupViewController;

function signupGoogleCredential(credential: OAuthCredential) {
    throw new Error("Function not implemented.");
}
