import React from 'react';

import Menu from "../menu/Menu";
import Modal from "../modal/Modal";
import useModal from "../../hooks/useModal";
import {ReactComponent as IconBtn} from '../../assets/img/layout/btn.svg';

import style from './Layout.module.scss';
import ProductFormAdd from "../form/productForm/ProductFormAdd";


const Layout = ({children, title, subtitle}) => {
    const {visible, handleVisible} = useModal();
    return (
        <div className={style.layout__wrapper}>
            <Menu/>
            <div className={style.layout}>
                <header className={style.layout__header}>
                    <div>
                        <h1 className={style.layout__title}>{title}</h1>
                        <p className={style.layout__subtitle}>{subtitle}</p>
                    </div>
                    <button
                        className={style.layout__btn}
                        onClick={handleVisible}
                    >
                        <IconBtn className={style.layout__btn_add}/>
                        <span>Create a product</span>
                    </button>
                </header>
                <section className={style.layout__page}>
                    {children}
                </section>
            </div>
            <Modal
                visible={visible}
                handleVisible={handleVisible}
            >
                <ProductFormAdd />
            </Modal>
        </div>
    );
};

export default Layout;