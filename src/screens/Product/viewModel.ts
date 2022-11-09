import { db } from "config/firebase.config";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";

import uuid from 'react-native-uuid';
import { CommentProp, Identification } from "./model";


export const useProductViewModel = () => {

    const getData = async (id: Identification) => {
        const myDoc = doc(db, 'product', id);
        const data = await getDoc(myDoc);

        const comments = data.data()?.comments.reverse();

        return {
            data,
            comments
        }
    }

    const addComment = (id: Identification, comment: CommentProp) => {
        const commentRef = doc(db, 'product', id);
        return updateDoc(commentRef, {
            comments: arrayUnion({
                id: uuid.v4() as string,
                text: comment,
            })
        });
    }

    return {
        getData,
        addComment
    }
}