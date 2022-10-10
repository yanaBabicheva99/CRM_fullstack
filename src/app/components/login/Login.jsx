import React, {useEffect} from 'react';
import {addUser} from '../../utils/User';
import style from './Login.module.scss'

const Login = ({children}) => {
    useEffect(() => {
        addUser();
    }, []);

    return (
        <div className={style.login__wrapper}>
            <section className={style.login}>
                {children}
            </section>
        </div>
    );
};

export default Login;