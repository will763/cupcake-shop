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

const useSignupViewController = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const { registerUsername, createNewUser, getRegisteredUsers } = useSignupViewModel();

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
        errors
    }

}

export default useSignupViewController;