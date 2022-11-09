import { useFocusEffect } from "@react-navigation/native";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { Keyboard } from "react-native";

import uuid from 'react-native-uuid';
import { IComments } from "./types";
import { useProductViewModel } from "./viewModel";

export const useProductViewController = (id: string | number) => {

    const { getData, addComment } = useProductViewModel();

    const [data, setData] = useState<DocumentSnapshot<DocumentData>>();
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isSending, setIsSending] = useState(false);
    const [comments, setComments] = useState<IComments[]>([]);
    const [comment, setComment] = useState('');
    const [shouldUpdate, setShouldUpdate] = useState(uuid.v4());

    useFocusEffect(
        React.useCallback(() => {
            getData(id as string).then(({ comments, data }) => {
                setData(data);
                setComments(comments);
            }).catch(() => setShouldUpdate(uuid.v4()));
        }, [shouldUpdate])
    );

    useEffect(() => {
        if (data?.exists()) {
            setIsLoading(false);
        }
    }, [data])

    function cancelModal() {
        setShowModal(false);
    }

    async function sendComment() {
        setIsSending(true)

        Keyboard.dismiss();

        await addComment(id as string, comment).then(() => {
            setComment('');
            setShouldUpdate(uuid.v4())
        }).finally(() => setIsSending(false));
    }

    return {
        cancelModal,
        sendComment,
        showModal,
        isLoading,
        data,
        setShowModal,
        setComment,
        comment,
        comments,
        isSending
    }
}