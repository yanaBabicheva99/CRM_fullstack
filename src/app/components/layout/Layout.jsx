import React from 'react';
import Menu from "../menu/Menu";
import {ReactComponent as IconBtn} from '../../assets/img/layout/btn.svg';
import style from './Layout.module.scss';

const Layout = ({children}) => {
    return (
        <div className={style.layout__wrapper}>
            <Menu/>
            <div className={style.layout}>
                <header className={style.layout__header}>
                    <div>
                        <h1 className={style.layout__title}>Sales statistics</h1>
                        <p className={style.layout__subtitle}>Welcome to CRM dashboard</p>
                    </div>
                    <button className={style.layout__btn}>
                        <IconBtn/>
                        <span>Create a product</span>
                    </button>
                </header>
                <section className={style.layout__page}>
                    {children}
                </section>
            </div>
        </div>
    );
};

export default Layout;