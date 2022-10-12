import React from 'react';
import style from './Actions.module.scss';
import {ReactComponent as IconEdit} from '../../assets/img/action/edit.svg';
import {ReactComponent as IconDelete} from '../../assets/img/action/delete.svg';

const Actions = ({element, handleDelete}) => {
    console.log('element', element);
    return (
        <div className={style.actions}>
            <button className={style.action}>
                Sell
            </button>
            <button className={style.action}>
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