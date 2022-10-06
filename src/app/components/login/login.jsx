import React from 'react';
import style from './login.module.scss'

const Login = ({children}) => {

    return (
        <div className={style.login__wrapper}>
            <div className={style.login}>
                {children}
            </div>
        </div>
    );
};

export default Login;