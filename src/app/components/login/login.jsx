import React, {useState} from 'react';
import style from './login.module.scss'
import RegisterForm from "../registerForm/registerForm";
import LoginForm from "../loginForm/loginForm";
const Login = () => {
    const [formType, setFormType] = useState('register');

    const toggleFormType = () => {
        setFormType(prevState => prevState === 'register' ? 'login' : 'register');
    }
    return (
        <div className={style.login__wrapper}>
            <div className={style.login}>
                {formType === 'register'
                    ? (
                        <>
                            <div className={style.login__header}>
                                <h1>Create an account</h1>
                            </div>
                            <RegisterForm />
                            <p>Already have an account ?
                                <a
                                    className={style.login__link}
                                    onClick={toggleFormType}
                                > Log in</a>
                            </p>
                        </>
                    )
                    : (
                        <>
                            <div className={style.login__header}>
                                <h1>Sign in</h1>
                            </div>
                            <LoginForm />
                            <p>Dont have account ?
                                <a
                                    className={style.login__link}
                                    onClick={toggleFormType}
                                > Sign up</a>
                            </p>
                        </>

                    )
                }
            </div>
        </div>
    );
};

export default Login;