import { yupResolver } from "@hookform/resolvers/yup";
import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { showMessage } from "react-native-flash-message";
import { schema } from "./validation";

export const useCustomizeOrderViewController = () => {
    const { control, handleSubmit, formState: { errors }, clearErrors, reset } = useForm<{ text: string }>({
        resolver: yupResolver(schema)
    });

    const [isSending, setIsSending] = useState(false);

    function emptyFieldError() {
        showMessage({
            message: "Order Error",
            description: 'fill in the field before submitting',
            type: "default",
            backgroundColor: "#fefefe",
            color: '#ff0000',
            duration: 5000,
            titleStyle: { fontSize: 18 },
            hideOnPress: true,
        });

    }

    useEffect(() => {
        errors.text && emptyFieldError();
        errors.text && console.log(errors);
    }, [errors]);

    useFocusEffect(
        React.useCallback(() => {
            clearErrors();
            reset();
        }, [])
    );

    function sendOrder(data: any) {
        console.log(data);

        setIsSending(true);

        const id = setTimeout(() => {
            setIsSending(false);

            showMessage({
                message: "Order Placed Successfully",
                type: "success",
                titleStyle: { fontSize: 18 },
                duration: 2000
            });

            reset()
        }, 2000)

        return () => clearTimeout(id);
    }

    const submitForm = handleSubmit(sendOrder);

    return {
        control,
        isSending,
        submitForm
    }
}