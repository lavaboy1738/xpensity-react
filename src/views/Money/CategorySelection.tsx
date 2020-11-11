import styled from "styled-components";
import React from "react";

const CategorySelectionStyle = styled.section`
    color: #333333;
    ul{
        display: flex;
        min-height: 4.5rem;
        li{
        width: 50%;
        font-size: 2.5rem;
        font-weight: 200;
        text-align: center;
        background-color: #b4ecd5;
        line-height: 4.5rem;
        position: relative;
        overflow: hidden;
        z-index: 1;

        &::after{
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: #68e2ae;
            top: 0;
            z-index: -1;
            transition: 0.3s all ease;
        }

        &.category-left::after{
            right: -100%;
        }
        &.category-right::after{
            left: -100%;
        }

        &.selected{
            &.category-left::after{
            right: 0%;
            }
            &.category-right::after{
            left: 0%;
            }
        }
        }
    }
`


const CategorySelection:React.FunctionComponent = () => {

    return(
        <CategorySelectionStyle>
            <ul>
                <li className="selected category-left">Expenditure</li>
                <li className="category-right">Income</li>
            </ul>
        </CategorySelectionStyle>
    )
}


export {CategorySelection};