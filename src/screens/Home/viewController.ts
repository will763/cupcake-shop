import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { DocumentData } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useHomeViewModel } from "./viewModel";

export const useHomeViewController = () => {
    const navigation = useNavigation();

    const { getData } = useHomeViewModel()

    const [allItems, setAllItems] = useState<Array<DocumentData>>([]);
    const [trendingItems, setTrendingItems] = useState<Array<DocumentData>>([]);
    const [isReady, setIsReady] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            getData().then(({ documents, trending }) => {
                setAllItems(documents);
                setTrendingItems(trending)
            }).catch(() => navigation.navigate('home'));
        }, [])
    );

    useEffect(() => {
        if (allItems && trendingItems) {
            const id = setTimeout(() => {
                setIsReady(true);
            }, 2000);

            return () => clearTimeout(id);
        }

    }, [allItems, trendingItems])

    return {
        allItems,
        trendingItems,
        isReady
    }
}