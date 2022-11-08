import { useForm } from "react-hook-form";
import { showMessage } from "react-native-flash-message";

import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useEffect, useState } from "react";
import { serverTimestamp } from "firebase/firestore";

import { FormValues } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validation";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";
import { useFeedbackViewModel } from "./viewModel";


export const useFeedbackViewController = () => {
    const [date, setDate] = useState(new Date());
    const [isSending, setIsSending] = useState(false);

    const { createRegister } = useFeedbackViewModel()

    const { control, handleSubmit, formState: { errors }, clearErrors, reset } = useForm<FormValues>({
        resolver: yupResolver(schema)
    });

    useFocusEffect(
        React.useCallback(() => {
            clearErrors();
            reset();
        }, [])
    );

    useEffect(() => {
        const { name, testedNotWorked, testedWorked, untested } = errors;

        if (name || testedWorked || testedNotWorked || untested) {
            verifyEmptyFields();
        }

    }, [errors])

    function errorToCreate() {
        showMessage({
            message: "Something went wrong",
            type: "default",
            backgroundColor: "#fefefe",
            color: '#ff0000',
            duration: 5000,
            titleStyle: { fontSize: 18 },
            hideOnPress: true,
        });
    }

    function successfulSending() {
        reset();

        showMessage({
            message: 'Success',
            description: "Your feedback has been sent successfully",
            type: "success",
            titleStyle: { fontSize: 18 },
            duration: 2000
        });
    }

    const onChange = (event: DateTimePickerEvent, date: Date | undefined) => {
        date && setDate(date);
    };

    const showDatePicker = () => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: 'date',
        });
    };

    function verifyEmptyFields() {
        showMessage({
            message: "Error",
            description: 'fill in all the fields before submitting',
            type: "default",
            backgroundColor: "#fefefe",
            color: '#ff0000',
            duration: 5000,
            titleStyle: { fontSize: 18 },
            hideOnPress: true,
        });
    }

    async function create({ name, testedNotWorked, testedWorked, untested }: FormValues) {

        const docData = {
            name: name,
            date: serverTimestamp(),
            tested_Worked: testedWorked,
            tested_and_not_worked: testedNotWorked,
            untested: untested,
        }

        setIsSending(true);

        await createRegister(docData)
            .then(() => {
                successfulSending()
                reset();
                clearErrors();
            })
            .catch(() => errorToCreate())
            .finally(() => setIsSending(false))
    }

    const submitForm = handleSubmit(create);

    return {
        isSending,
        showDatePicker,
        submitForm,
        control,
        date
    }
}