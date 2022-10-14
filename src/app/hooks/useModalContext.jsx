import {useContext} from "react";
import {ModalContext} from "../context/ModalContext";


export const useModalContext = () => {
    const [visible, setVisible] = useContext(ModalContext);

    return [visible, setVisible];
}