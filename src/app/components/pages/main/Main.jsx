import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import SellForm from "../../form/productForm/SellForm";
import Modal from '../../modal/Modal';
import {useModal} from "../../../hooks/useModal";
import {Pie} from "../../Charts/Pie/Pie";
import {useSales} from "../../../hooks/useSales";

import style from './Main.module.scss'
import {Bar} from "../../Charts/Bar/Bar";

const Main = () => {
   const lacationState = useLocation();
    const {visible, setVisible} = useModal();
    const {soldProducts} = useSales();

   const {id, remains} = lacationState.state || {id: null, remains: null};

    const handleOpen = () => {
        setVisible({sell: true});
    };
    const handleClose = () => {
        setVisible({sell: false});
    };

    useEffect(() => {
        if (id !== null) {
            handleOpen();
        }
    }, []);


    return (<>
        <div className={style.statistics}>
            <div className={style.statistics__day}>
                {soldProducts.length !== 0 && <Pie arrOptions={soldProducts} />}
            </div>
            <div className={style.statistics__overview}>
                {soldProducts.length !== 0 && <Bar arrOptions={soldProducts} />}
            </div>
        </div>
                <Modal
                    visible={visible.sell}
                    handleVisible={handleClose}
                >
                    {id !== null && (
                    <SellForm
                        id={id}
                        quantity={remains}
                        handleVisible={handleClose}
                    />)}
                </Modal>
        </>
    );
};

export default Main;