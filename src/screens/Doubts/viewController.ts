import { yupResolver } from "@hookform/resolvers/yup";
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { showMessage } from "react-native-flash-message";
import { schema } from "./validation";


export const useDoubtViewController = () => {
    const [isSending, setIsSending] = useState(false);

    const { control, handleSubmit, formState: { errors }, clearErrors, reset } = useForm<{ text: string }>({
        resolver: yupResolver(schema)
    });

    useFocusEffect(
        React.useCallback(() => {
            clearErrors();
            reset();
        }, [])
    );

    useEffect(() => {
        errors.text && emptyFieldError()
    }, [errors])

    function emptyFieldError() {
        showMessage({
            message: "Doubt Error",
            description: 'fill in the field before submitting',
            type: "default",
            backgroundColor: "#fefefe",
            color: '#ff0000',
            duration: 5000,
            titleStyle: { fontSize: 18 },
            hideOnPress: true,
        });
    }

    function success() {
        setIsSending(true);

        const id = setTimeout(() => {
            setIsSending(false);

            showMessage({
                message: "Doubt Sent",
                type: "success",
                titleStyle: { fontSize: 18 },
                duration: 2000
            });

            reset()
        }, 2000)

        return () => clearTimeout(id);
    }

    const submitForm = handleSubmit(success);

    return {
        isSending,
        submitForm,
        control
    }
}