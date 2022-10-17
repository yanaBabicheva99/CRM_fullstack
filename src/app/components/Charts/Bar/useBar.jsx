import React, {useState, useEffect} from 'react';


export const useBar = (arrOptions) => {

    const days = {
        '1': 'Mon',
        '2': 'Tue',
        '3': 'Wed',
        '4': 'Thu',
        '5': 'Fri',
        '6': 'Sat',
        '0': 'Sun'
    };

    const [soldProductsDays, setSoldProductsDays] = useState([]);
    const [soldProductsValues, setSoldProductsValues] = useState([]);

    let dataDays = [];
    let dataValues = [];

    useEffect(() => {
        console.log(soldProductsDays);
        console.log(soldProductsValues);
    }, [soldProductsDays, soldProductsValues]);

    const getProductsInfo = (day) => {
        const soldProducts = arrOptions.filter(product => product.day === day);
        dataDays.push(day);
        if (soldProducts.length === 0) {
            dataValues.push(0)
        }
        else {
            const amountProducts = soldProducts.reduce((total, item) => total + item.quantity, 0)
             dataValues.push(amountProducts)
        }
    }


    useEffect(() => {
         dataDays = [];
         dataValues = [];

        Object.keys(days).forEach(day => getProductsInfo(days[day]));

        setSoldProductsDays(dataDays);
        setSoldProductsValues(dataValues);

    }, [arrOptions]);

    const options = {
        xAxis: {
            type: 'category',
            data: soldProductsDays
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: soldProductsValues,
                type: 'bar'
            }
        ]
    };

    return {soldProductsDays, options}
};

