import {NumpadStyle} from "./NumpadStyle";
import React, {useState} from "react";

type Props = {
    onChange: (total: string)=>void;
    onOk: ()=>void;
    value: string;
}

const Numpad:React.FunctionComponent<Props> = (props) =>{

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
                if(props.value === "0"){
                    props.onChange(text);
                }else if (props.value.length === 10){
                    return
                }else{
                    props.onChange(props.value+text)
                }
                break;
            case ".":
                if(props.value.indexOf(".")>=0){return}
                props.onChange(props.value + text)
                break;
            case "Del.":
                if(props.value.length === 1){
                    props.onChange("0")
                }else{
                    props.onChange(props.value.slice(0, -1));
                }
                break;
            case "C":
                props.onChange("0");
                break;
            case "OK":
                props.onOk();
                props.onChange("0")
                break;
        }
    }

    return(
        <NumpadStyle>
            <div className="display">
                {props.value}
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