import React from 'react';
import {useFormik} from "formik";
import {loginSchema} from "../../schemas";
import FormInput from "../FormInput/FormInput";
import {FormListLogin, FormListRegistration} from "./FormCustom.mock.js";
import {useStyles} from "./FormCustom.style";
import FormButton from "../FormButton/FormButton";


const FormCustom = () => {
    const classes = useStyles();
    const urlReg = window.location.href.endsWith('registration')
    let cookies = document.cookie;
    const formik = useFormik({
        initialValues: {
            text: '',
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            if(urlReg) {
                cookies = 'user=' + JSON.stringify(values);
                cookies = 'auth=false';
                console.log(cookies)
                window.location = '/login'
            }else{
                alert(JSON.stringify(values, null, 2))
            }
        }
    });
    return (
        <>
        { urlReg ?
            <form onSubmit={formik.handleSubmit} className={classes.formWrap}>
                {FormListRegistration.map((elem) => {
                    return (
                        <FormInput
                            key={elem.id.toString()}
                            id={elem.id}
                            type={elem.id}
                            labelIcon={elem.labelIcon}
                            labelText={elem.labelText}
                            value={formik.values[elem.id]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            formik={formik}
                            elem={elem.id}
                        />
                    );
                })}
                <FormButton/>
            </form>
            :
            <form onSubmit={formik.handleSubmit} className={classes.formWrap}>
                {FormListLogin.map((elem) => {
                    return (
                        <FormInput
                            key={elem.id.toString()}
                            id={elem.id}
                            type={elem.id}
                            labelIcon={elem.labelIcon}
                            labelText={elem.labelText}
                            value={formik.values[elem.id]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            formik={formik}
                            elem={elem.id}
                        />
                    );
                })}
                <FormButton/>
            </form>
        }
        </>
    );
};


















{/*<FormInput*/}
{/*    labelIcon = <EmailSvg/>*/}
{/*    labelText='Email'*/}
{/*    value={formik.values.email}*/}
{/*    onChange={formik.handleChange}*/}
{/*    onBlur={formik.handleBlur}*/}
{/*    name="email"*/}
{/*    type="text"*/}
{/*    id='email'*/}
{/*    error={formik.touched.email && Boolean(formik.errors.email)}*/}
{/*    helperText={formik.touched.email && formik.errors.email}*/}
{/*/>*/}
{/*<FormInput*/}
{/*    labelIcon=<PasswordSvg/>*/}
{/*    labelText='Password'*/}
{/*    value={formik.values.password}*/}
{/*    onChange={formik.handleChange}*/}
{/*    onBlur={formik.handleBlur}*/}
{/*    name="password"*/}
{/*    type="password"*/}
{/*    id='password'*/}
{/*    error={formik.touched.password && Boolean(formik.errors.password)}*/}
{/*    helperText={formik.touched.password && formik.errors.password}*/}
{/*    />*/}











// const FormButton = () =>{
//
//     const {values, errors, touched,handleBlur,handleChange,handleSubmit} = useFormik({
//         initialValues: {
//             email: '',
//             password: '',
//         },
//         validationSchema:loginSchema,
//
//     })
//     // const formik = useFormik({
//     //     initialValues: {
//     //         text: '',
//     //         email: '',
//     //         password: '',
//     //     },
//     //     validationSchema:loginSchema,
//     //     onSubmit: (e) => {
//     //         console.log('submit')
//     //     },
//     // })
//
//     const urlReg = window.location.href.endsWith('registration')
//     const classes = useStyles();
//
//     return (
//         <>
//             {urlReg ?
//                 <form onSubmit={handleSubmit} className={classes.formWrap} >
//                     <Box>
//                         <FormInput
//                             // labelItem=<EmailSvg/>
//                             // labelText='Email'
//                             value={values.email}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             name="email"
//                             type="text"
//                             id='1'
//                         />
//                         {/*<ErrorMessage formik={formik} elem={elem.type}/>*/}
//                         {touched.email && Boolean(errors.email) &&
//                         <Typography className='errorMess'> {errors.email}</Typography>}
//                     </Box>
//                     {/*{FormListLogin.map((elem) => {*/}
//                     {/*    return (*/}
//                     {/*        <Box>*/}
//                     {/*            <FormInput*/}
//                     {/*                id={elem.id}*/}
//                     {/*                type={elem.type}*/}
//                     {/*                htmlFor={elem.htmlFor}*/}
//                     {/*                labelIcon={elem.labelIcon}*/}
//                     {/*                labelText={elem.labelText}*/}
//                     {/*                value={values[elem.value]}*/}
//                     {/*                onChange={handleChange}*/}
//                     {/*                onBlur={handleBlur}*/}
//                     {/*                // error={formik.touched[elem.type] && Boolean(formik.errors[elem.type])}*/}
//                     {/*                // helperText={formik.touched[elem.type] && formik.errors[elem.type]}*/}
//
//                     {/*            />*/}
//                     {/*            /!*<ErrorMessage formik={formik} elem={elem.type}/>*!/*/}
//                     {/*            {touched[elem.type] && Boolean(errors[elem.type]) &&*/}
//                     {/*            <Typography className='errorMess'> {errors[elem.type]}</Typography>}*/}
//                     {/*        </Box>*/}
//                     {/*    );*/}
//                     {/*})}*/}
//                     <Box className = {classes.buttonLogin}>
//                         <ButtonCustom
//                             variantText='no-back'
//                             buttonText='Forgot password?'/>
//                         <ButtonCustom
//                             typeButton='submit'
//                             variantText='regist'
//                             buttonText='Sing in'/>
//                     </Box>
//                     <Box className = {classes.buttonLogin}>
//                         <ButtonCustom
//                             variantText='outlined'
//                             buttonText='Don’t have & account?'/>
//                     </Box>
//                 </form>
//                 : null
//                 // <form onSubmit={formik.handleSubmit} className={classes.formWrap}>
//                 //     {FormListRegistration.map((elem) => {
//                 //         return (
//                 //             <Box>
//                 //                 <FormInput
//                 //                     id={elem.id}
//                 //                     type={elem.type}
//                 //                     htmlFor={elem.htmlFor}
//                 //                     labelIcon={elem.labelIcon}
//                 //                     labelText={elem.labelText}
//                 //                     value={formik.values.type}
//                 //                     onChange={formik.handleChange}
//                 //                     onBlur={formik.handleBlur}
//                 //                 />
//                 //                 {/*<ErrorMessage formik={formik} elem={elem.type}/>*/}
//                 //                 {formik.touched[elem.type] && Boolean(formik.errors[elem.type]) &&
//                 //                 <Typography className='errorMess'> {formik.errors[elem.type]}</Typography>}
//                 //             </Box>
//                 //         );
//                 //     })}
//                 //     <ButtonCustom typeButton='submit' variantText='regist' buttonText='Register'/>
//                 // </form>
//             }
//         </>
//
//
//     );
// }

export default FormCustom;









//
//
// <form onSubmit={handleSubmit}>
//     {FormListLogin.map((elem) => {
//         return (<Box>
//                 <FormInput
//                     htmlFor={elem.htmlFor}
//                     labelIcon={elem.labelIcon}
//                     labelText={elem.labelText}
//                     value={values.type}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     id={elem.id}
//                     type={elem.type}
//                 />
//                 {errors.password && touched.email &&
//                 <Typography className='errorMess'>{errors.email}</Typography>}
//             </Box>
//         );
//     })}
//     <ButtonCustom variantText='contained' buttonText='Sing in'/>
// </form>


// const formik = useFormik({
//     initialValues: {
//         fullName: '',
//         email: '',
//         password: '',
//     },
//     validationSchema: loginSchema,
//     onSubmit: (values) => {
//         alert(JSON.stringify(values, null, 2));
//     },
// });
//
//
// const urlReg = window.location.href.endsWith('registration')

            // <>
            //     <form onSubmit={formik.handleSubmit}>
            //         <FormInput
            //             fullWidth
            //             htmlFor='email'
            //             labelIcon=<EmailSvg/>
            //             labelText='Email'
            //             id="email"
            //             name="email"
            //             label="Email"
            //             value={formik.values.email}
            //             onChange={formik.handleChange}
            //             error={formik.touched.email && Boolean(formik.errors.email)}
            //             helperText={formik.touched.email && formik.errors.email}
            //         />
            //         <FormInput
            //             fullWidth
            //             htmlFor='password'
            //             labelIcon=<PasswordSvg/>
            //             labelText='Password'
            //             id="password"
            //             name="password"
            //             label="Password"
            //             type="password"
            //             value={formik.values.password}
            //             onChange={formik.handleChange}
            //             error={formik.touched.password && Boolean(formik.errors.password)}
            //             helperText={formik.touched.password && formik.errors.password}
            //         />
            //         <ButtonCustom variantText='contained' buttonText='Sing in'/>
            //     </form>
            // </>


{/*<FormInput*/}
{/*    htmlFor= 'email'*/}
{/*    labelIcon = {<EmailSvg/>}*/}
{/*    labelText = 'Email'*/}
{/*    value = {values.email}*/}
{/*    onChange = {handleChange}*/}
{/*    onBlur = {handleBlur}*/}
{/*    id = "email"*/}
{/*    type = "text"*/}
{/*/>*/}

{/*<FormInput*/}
{/*    htmlFor= 'password'*/}
{/*    labelIcon = {<PasswordSvg/>}*/}
{/*    labelText = 'Password'*/}
{/*    value = {values.password}*/}
{/*    onChange = {handleChange}*/}
{/*    onBlur = {handleBlur}*/}
{/*    id = "password"*/}
{/*    type = "text"*/}
{/*/>*/}
{/*{errors.password && touched.email && <p className='errorMess'>{errors.password}</p>}*/}



    {/*<FormControl onSubmit={handleSubmit} autoComplete='off' className='formWrap'>*/}
    {/*        ({FormListLogin.map((elem) => {*/}
    {/*                return (<Box>*/}
    {/*                        <FormInput*/}
    {/*                            htmlFor={elem.htmlFor}*/}
    {/*                            labelIcon={elem.labelIcon}*/}
    {/*                            labelText={elem.labelText}*/}
    {/*                            value={values.email}*/}
    {/*                            onChange={handleChange}*/}
    {/*                            onBlur={handleBlur}*/}
    {/*                            id={elem.id}*/}
    {/*                            type={elem.type}*/}
    {/*                            typeForm={elem.typeForm}*/}
    {/*                        />*/}
    {/*                        {errors.password && touched.email &&*/}
    {/*                        <Typography className='errorMess'>{errors.email}</Typography>}*/}
    {/*                    </Box>*/}
    {/*                );*/}
    {/*            })})*/}

    {/*        ({FormListRegistration.map((elem) => {*/}
    {/*                return (*/}
    {/*                    <>*/}
    {/*                        <FormInput*/}
    {/*                            htmlFor={elem.htmlFor}*/}
    {/*                            labelIcon={elem.labelIcon}*/}
    {/*                            labelText={elem.labelText}*/}
    {/*                            value={values.email}*/}
    {/*                            onChange={handleChange}*/}
    {/*                            onBlur={handleBlur}*/}
    {/*                            id={elem.id}*/}
    {/*                            type={elem.id}*/}
    {/*                        />*/}
    {/*                        {errors.password && touched.email &&*/}
    {/*                        <Typography className='errorMess'>{errors.email}</Typography>}*/}
    {/*                    </>*/}
    {/*                );*/}
    {/*            })*/}
    {/*        })*/}



    {/*    <ButtonCustom variantText='contained' buttonText='Sing in'/>*/}
    {/*</FormControl>*/}