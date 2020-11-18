import { Category } from "components/CategorySelection";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ChartStyles = styled.div`

`

type Prop = {
    selectedCategory: Category
}

const Chart: React.FunctionComponent<Prop> = (props) =>{
    const echarts = require("echarts");
    const chartRef = useRef<HTMLDivElement>(null);
    const width = window.innerWidth * 4.3;
    const height = window.innerHeight *0.75;

    useEffect(()=>{
        const mychart = echarts.init(chartRef.current);
        const option = {
            grid:{
                left: 40,
                top: 20,
                right: 5,
                bottom: 20
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' , 
                'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
                'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
                'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                axisTick: {
                    alignWithLabel: true
                }
            },
            yAxis: {
                type: 'value',
                scale: "true"
            },
            tooltip: {
                show: true,
                triggerOn: "click",
                position: "top"
            },
            color:
                ["#25df8e"],
            series: [{
                symbolSize: 30,
                data: [820, 932, 901, 934, 1290, 1330, 1320,
                    820, 932, 901, 934, 1290, 1330, 1320,
                    820, 932, 901, 934, 1290, 1330, 1320,
                    820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                symbol: "diamond",
                itemStyle:{
                    borderWidth: 5
                },
                lineStyle: {
                    width: 8
                },
                areaStyle: {
                    color: "#25df8e",
                    opacity: 0.2
                }
            }],
            animationDuration: 2000
        };

        mychart.setOption(option)
    }, [props.selectedCategory, echarts])


    return (
            <ChartStyles>
                <div className="chart" ref={chartRef} 
            style={{width: `${width}px`, height:`${height}px`}}></div>
            </ChartStyles>
    )
}

export {Chart}