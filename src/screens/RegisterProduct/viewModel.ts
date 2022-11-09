import { db } from "config/firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import uuid from 'react-native-uuid';
import { DocData, UploadProp } from "./model";


export const useRegisterProductModel = () => {

    function createNewProduct(docData: DocData) {
        const myDoc = doc(db, 'product', uuid.v4() as string);

        return setDoc(myDoc, docData);
    }

    const uploadImage = async (image: UploadProp) => {
        const response = await fetch(image);
        const blob = await response.blob();

        const fileRef = ref(getStorage(), uuid.v4() as string);
        await uploadBytes(fileRef, blob);

        const url = await getDownloadURL(fileRef);
        return url;
    }

    return {
        createNewProduct,
        uploadImage
    }
}