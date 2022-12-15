import * as yup from 'yup';

export const loginSchema = yup.object({
    isReg: yup.boolean(),
    text: yup.string()
        .when("isReg", {
            is: true,
            then: yup.string()
                .required("Name is required")
        }),
    email: yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: yup.string()
        .required('Enter your password')
        .when("isReg", {
            is: true,
            then: yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required(" Password is required ")
        }),
})












