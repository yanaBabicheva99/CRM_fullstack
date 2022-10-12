import React from 'react';
import {useState} from "react";

export const UseModal = () => {
    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        setVisible(prevState => !prevState);
    };

    return {visible, handleVisible}
};

export default UseModal;