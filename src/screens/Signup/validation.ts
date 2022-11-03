import * as yup from "yup";

export const schema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup.string().min(6).required()
        .oneOf([yup.ref('password'), null], 'Passwords must match')

});