import { FieldValue } from "firebase/firestore";

export type FeedbackRegister = {
    name: string,
    date: FieldValue,
    tested_Worked: string;
    tested_and_not_worked: string;
    untested: string;
}
