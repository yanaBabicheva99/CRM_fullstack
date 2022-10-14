import {useContext} from "react";
import {ModalContextAction} from "../context/ModalContextAction";

export const useModalContextAction = () => {
    const [open, setOpen] = useContext(ModalContextAction);

    return [open, setOpen];
}