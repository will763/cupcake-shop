import * as yup from "yup";

export const schema = yup.object({
    image: yup.string().required(),
    nameProduct: yup.string().required(),
    descriptionProduct: yup.string().required()
});