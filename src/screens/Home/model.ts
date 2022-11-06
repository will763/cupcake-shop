import { DocumentData } from "firebase/firestore";

export type GetDataTypes = Promise<{
    documents: DocumentData[];
    trending: DocumentData[];
}>;
