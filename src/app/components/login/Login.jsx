import React from 'react';
import style from './Login.module.scss'
import {useEffect} from "react";
import {addUser} from "../../utils/User";

const Login = ({children}) => {
    useEffect(() => {
        addUser();
    }, []);

    return (
        <div className={style.login__wrapper}>
            <div className={style.login}>
                {children}
            </div>
        </div>
    );
};

export default Login;