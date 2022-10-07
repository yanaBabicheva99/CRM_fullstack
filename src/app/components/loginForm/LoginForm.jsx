import React, { useState } from 'react';
import {Link} from "react-router-dom";

import InputForm from "../inputForm/InputForm";

import style from "../registerForm/RegisterForm.module.scss";
import {existenceCheckUser} from "../../utils/User";


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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        existenceCheckUser(data);
    };

    return (
        <>
            <div className={style.header}>
                <h1>Sign in</h1>
            </div>
            <form className={style.form} onSubmit={handleSubmit}>
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
            <p>Dont have account ?
                <Link className={style.link} to='/register'> Sign up</Link>
            </p>
        </>
    )};
export default LoginForm;