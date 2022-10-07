import React from 'react';
import style from './InputForm.module.scss';
const InputForm = (
    {
        label,
        type = 'text',
        name,
        value,
        onChange,
        onBlur,
        touched,
        errors
    }
) => {
    return (
        <div className={style.input__wrapper}>
            <label className={style.label} htmlFor={name}>{label}</label>
                <input
                    className={style.input}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={label}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            {touched && errors && (
                <div className={style.input__error}>
                    {errors}
                </div>
            )}
        </div>
    );
};

export default InputForm;