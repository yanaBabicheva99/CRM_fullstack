import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import SellForm from "../../form/productForm/SellForm";
import Modal from '../../modal/Modal';
import {useModal} from "../../../hooks/useModal";


const Main = () => {
   const lacationState = useLocation();
    const {visible, setVisible} = useModal();

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

    return ( <>
        <h1>Main</h1>
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