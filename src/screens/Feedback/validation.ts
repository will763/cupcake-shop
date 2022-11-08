import * as yup from "yup";

export const schema = yup.object({
    name: yup.string().required(),
    testedWorked: yup.string().required(),
    testedNotWorked: yup.string().required(),
    untested: yup.string().required(),
});