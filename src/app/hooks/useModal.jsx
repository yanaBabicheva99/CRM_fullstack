import React, {useContext} from 'react';
import {useState} from "react";

// const ModalContext = React.createContext();
//
// export const useModal = () => {
//    return useContext(ModalContext);
// };
//
// export const ModalProvider = ({children}) => {
//     const [visible, setVisible] = useState(false);
//
//     const handleVisible = () => {
//         setVisible(prevState => !prevState);
//     };
//     return <ModalContext.Provider value={{visible, handleVisible}}>
//        {children}
//     </ModalContext.Provider>
// }

export const useModal = () => {
    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        setVisible(prevState => !prevState);
    };

    return {visible, handleVisible}
};

export default useModal;