import React from 'react';
import {Link} from "react-router-dom";
import { Formik } from 'formik';
import * as Yup from 'yup';


import InputForm from "../inputForm/InputForm";
import {existenceCheckUser} from "../../utils/User";

import style from '../login/Login.module.scss'


const SignupSchema = Yup.object().shape({
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
});


const RegisterForm = () => {
    const initialValues = {
        email: '',
        password: '',
    }
    return (
        <>
            <header className={style.login__header}>
                <h1>Sign in</h1>
            </header>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={existenceCheckUser}
            >{({
                   values,
                   errors,
                   touched,
                   handleChange,
                   handleBlur,
                   handleSubmit,
               }) => (
                <form className={style.form} onSubmit={handleSubmit}>
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
                        placeholder='Enter password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched.password}
                        errors={errors.password}
                    />
                    <button
                        className={style.form__btn}
                    >
                        Log in
                    </button>
                </form>
            )}
            </Formik>
            <p>Dont have account ?
                <Link className={style.login__link} to='/register'> Sign up</Link>
            </p>
        </>
    )
};

export default RegisterForm;
