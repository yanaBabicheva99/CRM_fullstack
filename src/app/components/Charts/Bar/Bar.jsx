import ReactECharts from 'echarts-for-react';
import React from "react";
import {useBar} from "./useBar";


export const Bar = ({arrOptions}) => {
    const {soldProductsDays, options} = useBar(arrOptions);

    return (
        <>
            {soldProductsDays.length !== 0 && <ReactECharts option={options}/>}
        </>
    )
}