import { db } from "config/firebase.config";
import { collection, DocumentData, getDocs, orderBy, query } from "firebase/firestore";
import { GetDataTypes } from "./model";

export const useHomeViewModel = () => {

    const getData = async (): GetDataTypes => {
        const getAllProduct = query(collection(db, "product"), orderBy("create_at", "desc"));

        const docs = await getDocs(getAllProduct);
        const documents: Array<DocumentData> = [];
        docs.forEach((doc) => {
            documents.push(doc);
        });

        const trending = documents.sort((a, b) => b.data().ratings.length - a.data().ratings.length)
            .slice(0, 3);

        return {
            documents,
            trending
        }
    }

    return {
        getData
    }
}