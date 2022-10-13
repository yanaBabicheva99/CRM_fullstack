import React, {useState} from 'react';

export const useModal = () => {
    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        setVisible(prevState => !prevState);
    };

    return {visible, handleVisible};
};
