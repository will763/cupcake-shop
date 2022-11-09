import { serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { showMessage } from "react-native-flash-message";

import * as ImagePicker from 'expo-image-picker';

import { useRegisterProductModel } from "./viewModel";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormValues } from "./types";
import { schema } from "./validation";
import { useFocusEffect } from "@react-navigation/native";
import React from "react";


export const useRegisterProductController = () => {

    const { control, handleSubmit, formState: { errors }, clearErrors, reset, setValue } = useForm<FormValues>({
        resolver: yupResolver(schema)
    });

    const { createNewProduct, uploadImage } = useRegisterProductModel();

    const [isSaving, setIsSaving] = useState(false);
    const [isSaveImage, setIsSaveImage] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            const getData = () => {
                clearErrors();
                reset();
            }
            getData();
        }, [])
    );

    useEffect(() => {
        const { descriptionProduct, image, nameProduct } = errors;

        if (descriptionProduct || image || nameProduct) {
            verifyEmptyFields();
        }
    }, [errors]);

    function verifyEmptyFields() {
        showMessage({
            message: "Error",
            description: 'fill in all the fields and select a photo before submitting',
            type: "default",
            backgroundColor: "#fefefe",
            color: '#ff0000',
            duration: 7000,
            titleStyle: { fontSize: 18 },
            hideOnPress: true,
        });
    }

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
        showMessage({
            message: 'Success',
            description: "Product registered successfully",
            type: "success",
            titleStyle: { fontSize: 18 },
            duration: 2000
        });

        reset();
        clearErrors();
    }

    async function saveProduct(data: FormValues) {

        setIsSaving(true);

        await createProduct(data).finally(() => setIsSaving(false));
    }

    async function createProduct({ image, nameProduct, descriptionProduct }: FormValues) {
        const url = await uploadImage(image);

        if (!url) {
            errorToCreate()
            return;
        }

        const docData = {
            name: nameProduct,
            description: descriptionProduct,
            url: url,
            ratings: [],
            comments: [],
            create_at: serverTimestamp(),
        }

        await createNewProduct(docData)
            .then(() => successfulSending())
            .catch(() => errorToCreate());
    }

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,

        });

        if (!result.cancelled) {
            setIsSaveImage(true);
            setValue("image", result.uri, { shouldValidate: true })

            const id = setTimeout(() => {
                setIsSaveImage(false);
            }, 1500);

            return () => clearTimeout(id);
        }
    }

    const submitForm = handleSubmit(saveProduct);


    return {
        isSaving,
        isSaveImage,
        pickImage,
        submitForm,
        control
    }
}