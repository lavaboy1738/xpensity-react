import styled from "styled-components";
import React from "react";

const CommentsStyle = styled.section`
    min-height: 3.5rem;
    input{
        color: #333333;
        border: none;
        outline: none;
        padding: 0 1.2rem;
        height: 3.5rem;
        background-color: #d3faea;
        width: 100%;
        font-size: 1.5rem;
        font-weight: 200;
    }

`

type Props = {
    value: string;
    onChange: (comment: string) => void;
}

const Comments:React.FunctionComponent<Props> = (props) => {

    return(
        <CommentsStyle>
            <input type="text" 
            placeholder="Add Comments"
            value={props.value}
            onChange = {(e)=>{props.onChange(e.target.value)}}
            />
        </CommentsStyle>
    )
}

export {Comments}