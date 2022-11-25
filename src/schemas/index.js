import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup.string()
        .email('Email is invalid')
        .required('Email is invalid'),
    password: yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is required'),
})
