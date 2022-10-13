import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import InputForm from "../inputForm/InputForm";

import style from "../../modal/Modal.module.scss";
import styleForm from '../form.module.scss';


const AddProductSchema = Yup.object().shape({
    quantity: Yup
        .string()
        .required('Number of products is required')
        .matches(
            /^(0|[1-9]\d*)$/,
            'Number of products is incorrect'
        )
        .matches(
            /^[1-9]{1}[0-9]*$/,
            'Number of products is incorrect'
        ),
});
const SellForm = ({handleVisible, quantity}) => {
    console.log(typeof quantity)

    const initialValues = {
        quantity: '',
        day: 'Mon'
    };

    // const handleChange = ({target}) => {
    //     setFieldValue(target.name, target.value);
    // };


    const sell = (data) => {
        console.log(data);
        // handleVisible();
    };


    return (
        <>
            <header className={style.modal__header}>
                <h2 className={style.modal__title}>
                    Sell the product
                </h2>
            </header>
            <Formik
                initialValues={initialValues}
                validationSchema={AddProductSchema}
                onSubmit={sell}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleBlur,
                      handleSubmit,
                      handleChange,
                      setFieldValue
                  }) => (
                    <form className={styleForm.form} onSubmit={handleSubmit}>
                        <InputForm
                            label='Number of products'
                            name='quantity'
                            value={values.quantity}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            touched={touched.quantity}
                            errors={errors.quantity}
                        />

                        <FormControl className={style.select}>
                            <InputLabel id="demo-simple-select-autowidth-label">Day</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={values.day}
                                onChange={({target}) => setFieldValue('day', target.value)}
                                autoWidth
                                label='Day'
                            >
                                <MenuItem value='Mon'>Monday</MenuItem>
                                <MenuItem value='Tue'>Tuesday</MenuItem>
                                <MenuItem value='Wed'>Wednesday</MenuItem>
                                <MenuItem value='Thu'>Thursday</MenuItem>
                                <MenuItem value='Fri'>Friday</MenuItem>
                                <MenuItem value='Sat'>Saturday</MenuItem>
                                <MenuItem value='Sun'>Sunday</MenuItem>
                            </Select>
                        </FormControl>
                        <button
                            className={[styleForm.form__btn, styleForm.add].join(' ')}
                        >
                            Add Product
                        </button>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default SellForm;