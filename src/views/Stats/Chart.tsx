import { Category } from "components/CategorySelection";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import {CustomChart} from "../../utils/customChart";
import {NewStatement} from "../../hooks/useStatement";

const ChartStyles = styled.div`

`
type ArrayByDate = [string, {
    total: number;
    statements: NewStatement[];
}][]

type Prop = {
    selectedCategory: Category,
    value: ArrayByDate
}

const Chart: React.FunctionComponent<Prop> = (props) =>{
    const echarts = require("echarts");
    const chartRef = useRef<HTMLDivElement>(null);
    const width = window.innerWidth * 4.3;
    const height = window.innerHeight *0.75;

    useEffect(()=>{
        const mychart = echarts.init(chartRef.current);
        const option = CustomChart(props.value);
        mychart.setOption(option)
    }, [props.selectedCategory, echarts, props.value])


    return (
            <ChartStyles>
                <div className="chart" ref={chartRef} 
            style={{width: `${width}px`, height:`${height}px`}}></div>
            </ChartStyles>
    )
}

export {Chart}