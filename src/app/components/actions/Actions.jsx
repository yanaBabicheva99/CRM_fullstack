import React from 'react';

import {ReactComponent as IconEdit} from '../../assets/img/action/edit.svg';
import {ReactComponent as IconDelete} from '../../assets/img/action/delete.svg';

import style from './Actions.module.scss';

const Actions = ({element, handleDelete, onCurrentProduct, onVisibleEdit}) => {
    const handleClickChange = () => {
        onCurrentProduct(element);
        onVisibleEdit();
    }

    return (
        <div className={style.actions}>
            <button className={style.action}>
                Sell
            </button>
            <button
                className={style.action}
                onClick={handleClickChange}
            >
                <IconEdit />
            </button>
            <button
                className={style.delete}
                onClick={() => handleDelete(element.id)}
            >
                <IconDelete />
            </button>
        </div>
    );
};

export default Actions;