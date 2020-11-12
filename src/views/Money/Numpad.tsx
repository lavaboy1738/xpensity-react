import styled from "styled-components";
import React, { useState } from "react";

const NumpadStyle = styled.section`
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    color: #333333;
    .display{
        width: 100;
        text-align: right;
        font-size: 3.6rem;
        line-height: 4.5rem;
        padding: 0 1.2rem;
        min-height: 4.5rem;
        background-color: white;
        font-weight: 400;
        box-shadow: inset 0 -5px 3px -5px rgba(0,0,0,0.25),
        inset 0 5px 3px -5px rgba(0,0,0,0.25);
    }

    .numbers{
        color: #333333;
            button{
            float: left;
            width: 25%;
            height: 6.4rem;
            border: none;
            outline: none;
            font-size: 3rem;
            font-weight: 200;

            &.okay{
                float: right;
                height: 12.8rem;
                font-weight: 400;
            }
            &.zero{
                width: 50%;
            }
            &.dot{
                font-weight: 500;
            }

            &:nth-child(1){
                background-color: #e4fff4;
            }
            &:nth-child(2),
            &:nth-child(5){
                background-color: #c7f3e1;
            }
            &:nth-child(3),
            &:nth-child(6),
            &:nth-child(9){
                background-color: #9decca;
            }
            &:nth-child(4),
            &:nth-child(7),
            &:nth-child(10){
                background-color: #7ee6b9;
            }
            &:nth-child(8),
            &:nth-child(11),
            &:nth-child(13){
                background-color: #5ee4aa;
            }
            &:nth-child(14){
                background-color: #34dd94;
            }
            &:nth-child(12){
                background-color: #2cd68c;
            }
        }
    }

`


const Numpad = () =>{

    const [output, setOutput] = useState("0")

    const onNumpad = (event: React.MouseEvent) => {
        const text = (event.target as HTMLButtonElement).textContent;
        if(text === null) {return}
        switch (text){
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if(output === "0"){
                    setOutput(text)
                }else if (output.length === 10){
                    return
                }else{
                    setOutput(output+ text);
                }
                break;
            case ".":
                if(output.indexOf(".")>=0){return}
                setOutput(output+ ".")
                break;
            case "Del.":
                if(output.length === 1){
                    setOutput("0");
                }else{
                    setOutput(output.slice(0, -1))
                }
                break;
            case "C":
                setOutput("0");
                break;
            case "OK":
        }
    }

    return(
        <NumpadStyle>
            <div className="display">
                {output}
            </div>
            <div className="numbers clearfix" onClick={onNumpad}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>Del.</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>C</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button className="okay">OK</button>
                <button className="zero">0</button>
                <button className="dot">.</button>
            </div>
        </NumpadStyle>
    )
}




export {Numpad};