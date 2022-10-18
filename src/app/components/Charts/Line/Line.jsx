
import ReactECharts from "echarts-for-react";
import React from "react";
import {useLine} from "./useLine";

export const Line = ({arrOptions}) => {
    const {amountSoldProducts, options} = useLine(arrOptions);

    return (
        <>
            {amountSoldProducts.length !== 0 && <ReactECharts option={options}/>}
        </>
    )
}