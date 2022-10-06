import React from 'react';
import InputForm from "../inputForm/inputForm";
import {useState} from "react";
import style from './registerForm.module.scss'
const RegisterForm = () => {
    const [data, setData] = useState(
        {
            name: '',
            lastName: '',
            companyName: '',
            email: '',
            password: '',
            repeatPassword: ''
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
            <div className={style.form__wrapper}>
                <InputForm
                    label='First Name'
                    name='name'
                    value={data.name}
                    onChange={handleChange}
                />
                <InputForm
                    label='Last name'
                    name='lastName'
                    value={data.lastName}
                    onChange={handleChange}
                />
            </div>
            <InputForm
                label='Company name'
                name='companyName'
                value={data.companyName}
                onChange={handleChange}
            />
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
            <InputForm
                label='Repeat password'
                type='password'
                name='repeatPassword'
                value={data.repeatPassword}
                onChange={handleChange}
            />
                <button className={style.form__btn}>Create account</button>
        </form>
    )
};

export default RegisterForm;