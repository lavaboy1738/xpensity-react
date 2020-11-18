import React from "react";
import styled from "styled-components";

const NoDataStyles = styled.div`
    flex-grow:1;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        font-size: 2.2rem;
        font-weight: 300;
        opacity: 0.3
    }
`

const NoData = () =>{
    return (
        <NoDataStyles>
            <div>No Data Available</div>
        </NoDataStyles>
    )
}

export {NoData}