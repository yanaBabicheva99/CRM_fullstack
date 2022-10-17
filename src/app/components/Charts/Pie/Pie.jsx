
import ReactECharts from 'echarts-for-react';
import React from "react";
import {usePie} from "./usePie";

export const Pie = ({arrOptions}) => {
     const {soldProducts, options} = usePie(arrOptions);

    return (
        <>
            {soldProducts.length !== 0 && <ReactECharts option={options}/>}
        </>
    )
}