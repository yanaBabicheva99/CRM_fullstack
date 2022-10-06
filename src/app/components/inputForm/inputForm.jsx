import React from 'react';

const InputForm = ({label, type, name, value, onChange}) => {

    return (
        // <div className='mb-4'>
        <>
            <label htmlFor="">{label}</label>
            <div className="input-group">
                <input
                    className='form-control'
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </>
        // </div>
    );
};

export default InputForm;