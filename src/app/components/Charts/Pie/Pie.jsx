
import ReactECharts from 'echarts-for-react';
import React, {useEffect, useState} from "react";

export const Pie = ({arrOptions}) => {
    const [soldProducts, setSoldProducts] = useState([]);

    useEffect(() => {
        if (arrOptions.length === 0) return
        const data = arrOptions.map(product => {
            return {
                value: product.quantity,
                name: product.productName
            }
        });
        setSoldProducts(data)
    }, [arrOptions]);

    const options = {
        title: {
            text: 'Sales schedule by day',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '25%',
            orient: 'vertical',
            left: '65%'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['0%', '70%'],
                left: 0,
                right: '40%',
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '20',
                    }
                },
                labelLine: {
                    show: false
                },
                data: soldProducts
            }
        ]
    };
    return <ReactECharts option={options}/>

}