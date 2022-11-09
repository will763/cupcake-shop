import { FieldValue } from "firebase/firestore";

export type DocData = {
    name: string;
    description: string;
    url: string;
    ratings: never[];
    comments: never[];
    create_at: FieldValue;
}

export type UploadProp = string;