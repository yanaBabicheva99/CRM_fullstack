import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import SellForm from "../../form/productForm/SellForm";
import Modal from '../../modal/Modal';

import {useModalContextAction} from "../../../hooks/useModalContextAction";
const Main = () => {
   const lacationState = useLocation();
    const [open, setOpen] = useModalContextAction();

   const {id, remains} = lacationState.state || {id: null, remains: null};

    useEffect(() => {
        if (id !== null) {
          setOpen({open: true});
        }
    }, []);

    return ( <>
        <h1>Main</h1>
                <Modal
                    visible={open.open}
                    handleVisible={() => setOpen({open: false})}
                >
                    {id !== null && (
                    <SellForm
                        id={id}
                        quantity={remains}
                        handleVisible={() => setOpen({open: false})}
                    />)}
                </Modal>
        </>
    );
};

export default Main;