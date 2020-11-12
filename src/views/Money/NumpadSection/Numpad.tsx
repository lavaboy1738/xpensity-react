import {NumpadStyle} from "./NumpadStyle";
import React, {useState} from "react";

type Props = {
    onChange: (total: number)=>void;
}

const Numpad:React.FunctionComponent<Props> = (props) =>{

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
                props.onChange(parseFloat(output));
                setOutput("0");
                break;
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