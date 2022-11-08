import { db } from "config/firebase.config";
import { doc, FieldValue, setDoc } from "firebase/firestore";

import uuid from 'react-native-uuid';
import { FeedbackRegister } from "./model";

export const useFeedbackViewModel = () => {

    const createRegister = (docData: FeedbackRegister) => {
        const myDoc = doc(db, 'feedback', uuid.v4() as string);

        return setDoc(myDoc, docData);
    }

    return {
        createRegister
    }
}