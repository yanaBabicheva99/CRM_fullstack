import React from 'react';
import {Link} from "react-router-dom";
import { Formik } from 'formik';
import * as Yup from 'yup';


import InputForm from "../inputForm/InputForm";
import {addUserNew} from "../../utils/User";

import style from './RegisterForm.module.scss'


const SignupSchema = Yup.object().shape({
     name: Yup.string()
        .min(2, 'Name is too short!')
        .max(50, 'Name is too long!')
        .required('Name is required'),
    lastName: Yup.string()
        .min(2, 'Last name is too short!')
        .max(50, 'Last name is too long!')
        .required('Last name is required'),
    companyName: Yup.string()
        .min(2, 'Company name is too short!')
        .max(50, 'Company name is too long!')
        .required('Company name is required'),

    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup
        .string()
        .required('Password is required')
        .matches(
            /(?=.*[A-Z])/,
            'The password must have at least one capital letter'
        )
        .matches(
            /(?=.*[0-9])/,
            'The password must have at least one figure'
        )
        .matches(
            /(?=.*[!@#$%^&*])/,
            'The password must have at least one special symbol !@#$%^&*'
        )
        .matches(
            /(?=.{8,})/,
            'The password must consist of at least 8 symbols'
        ),
        repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});


const RegisterForm = () => {
    const initialValues = {
        name: '',
        lastName: '',
        companyName: '',
        email: '',
        password: '',
        repeatPassword: ''
    }
    return (
        <>
            <div className={style.header}>
                <h1>Create an account</h1>
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={addUserNew}
            >{({
             values,
             errors,
             touched,
             handleChange,
             handleBlur,
             handleSubmit,
               }) => (
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.form__wrapper}>
                    <InputForm
                        label='First Name'
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.name}
                        errors={errors.name}
                    />
                    <InputForm
                        label='Last name'
                        name='lastName'
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.lastName}
                        errors={errors.lastName}
                    />
                </div>
                <InputForm
                    label='Company name'
                    name='companyName'
                    value={values.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.companyName}
                    errors={errors.companyName}
                />
                <InputForm
                    label='Email'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.email}
                    errors={errors.email}
                />
                <InputForm
                    label='Password'
                    type='password'
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.password}
                    errors={errors.password}
                />
                <InputForm
                    label='Repeat password'
                    type='password'
                    name='repeatPassword'
                    value={values.repeatPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.repeatPassword}
                    errors={errors.repeatPassword}
                />
                <button
                    className={style.form__btn}
                >
                    Create account
                </button>
            </form>
            )}
            </Formik>
            <p>Already have an account ?
                <Link className={style.link} to='/login'> Log in</Link>
            </p>
        </>
    )
};

export default RegisterForm;