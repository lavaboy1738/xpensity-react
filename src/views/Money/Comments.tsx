import styled from "styled-components";
import React, { useState } from "react";

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

const Comments:React.FunctionComponent = () => {
    const [comment, setComment] = useState("");

    return(
        <CommentsStyle>
            <input type="text" 
            placeholder="Add Comments" 
            value={comment}
            onChange = {(e)=> setComment(e.target.value)}
            />
        </CommentsStyle>
    )
}

export {Comments}