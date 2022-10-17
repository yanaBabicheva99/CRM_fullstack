import React, {useState} from 'react';

export const UsePie = () => {
    const day = String(new Date().getDay());

    const days = {
        '1': 'Mon',
        '2': 'Tue',
        '3': 'Wed',
        '4': 'Thu',
        '5': 'Fri',
        '6': 'Sat',
        '0': 'Sun'
    };

    const dayNow = days[day];
    const [soldProductsToday, setSoldProductsToday] = useState([]);

    const addSoldProductToday = (soldProducts) => {
        const updatedData = soldProducts.filter(product => product.day === dayNow);
        setSoldProductsToday(updatedData);
        return soldProductsToday;
    }
    return {addSoldProductToday}
};
