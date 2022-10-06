import React from 'react';
import style from './inputForm.module.scss';
const InputForm = ({label, type = 'text', name, value, onChange}) => {

    return (
        <div className={style.input__wrapper}>
            <label className={style.label} htmlFor="">{label}</label>
                <input
                    className={style.input}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={label}
                    onChange={onChange}
                />
        </div>
    );
};

export default InputForm;