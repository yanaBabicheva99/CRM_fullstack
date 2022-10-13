import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import SellForm from "../../form/productForm/SellForm";
import Modal from '../../modal/Modal';
import {useModal} from "../../../hooks/useModal";
const Main = () => {
   const lacationState = useLocation();
   const {visible, handleVisible} = useModal();

   useEffect(() => {
       console.log(visible);
   }, [visible]);

   const {id, remains} = lacationState.state;

    useEffect(() => {
        handleVisible();
    }, [id]);

    return ( <>
        <h1>Main</h1>
                <Modal visible={visible} handleVisible={handleVisible}>
                    <SellForm quantity={remains} />
                </Modal>
        </>
    );
};

export default Main;