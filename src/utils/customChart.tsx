import {NewStatement} from "../hooks/useStatement";
import day from "dayjs";


type ArrayByDate = [string, {
        total: number;
        statements: NewStatement[];
}][]

const CustomChart = (statementsArr: ArrayByDate) => {

    const today = new Date();
    const dateArray = [];
    const amountArray = []
    for(let i = 29; i >= 0; i--){
        const date = day(today).subtract(i, "day").format("MM/DD");
        const dateCheck = statementsArr.filter(arrayItem => arrayItem[0] === date)[0];
        if(dateCheck){
            dateArray.push(date);
            amountArray.push(dateCheck[1].total)
        }else{
            dateArray.push(date);
            amountArray.push(0);
        }
    }

    return {
        grid:{
            left: 40,
            top: 20,
            right: 5,
            bottom: 40
        },
        xAxis: {
            type: 'category',
            data: dateArray,
            axisTick: {
                alignWithLabel: true
            },
            offset: 15
        },
        yAxis: {
            type: 'value',
            scale: "true",
            axisLabel: {
                formatter: function(value: number, index: number){
                    return `$${value}`
                }
            }
        },
        tooltip: {
            show: true,
            triggerOn: "click",
            formatter: `{b0}: ${"$"}{c0}`
        },
        color:
            ["#25df8e"],
        series: [{
            symbolSize: 30,
            data: amountArray,
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
    }
}

export {CustomChart}