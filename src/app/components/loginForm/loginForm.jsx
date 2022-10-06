import React from 'react';
import {useState} from "react";
import style from "../registerForm/registerForm.module.scss";
import InputForm from "../inputForm/inputForm";

const LoginForm = () => {
    const [data, setData] = useState(
        {
            email: '',
            password: '',
        });
    const handleChange = ({target}) => {
        setData(prevState => (
            {
                ...prevState,
                [target.name]: target.value
            }
        ))
    }
    return (
        <form className={style.form}>
            <InputForm
                label='Email'
                name='email'
                value={data.email}
                onChange={handleChange}
            />
            <InputForm
                label='Password'
                type='password'
                name='password'
                value={data.password}
                onChange={handleChange}
            />
            <button className={style.form__btn}>Log in</button>
        </form>
    )};
export default LoginForm;