import styled from "styled-components";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const TagSelectionStyle = styled.section`
overflow-x: hidden;
background-color: #f8fffc;
color: #333333;
flex-grow: 1;
ol{
    margin: -0.8rem -0.8rem;
    display: flex;
    flex-wrap: wrap;
    padding: 1.2rem;
    overflow-y: auto;
    li{
    margin: 0.8rem 0.8rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7fe0b6;
    font-size: 2rem;

    &.selected-tag{
        background-color:  #21d185;
        color: white;
    }
    }
    .new-tag{
        margin: 0.8rem 0.8rem;
        width: 4rem;
        height: 4rem;
        border: none;
        outline: none;
        background-color: #EEE;
        color: #444;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 2rem;
    }
}
`


const TagSelection:React.FunctionComponent = () => {

    const [tags, setTags] = useState<IconProp[]>(["home", "taxi", "dollar-sign", "book"])

    return(
        <TagSelectionStyle>
            <ol>
                {tags.map(tag=>{
                    return(
                        <li key={tag.toString()}>
                            <FontAwesomeIcon icon={tag}></FontAwesomeIcon>
                        </li>
                    )
                })}
                <button className="new-tag">
                <FontAwesomeIcon icon="plus"></FontAwesomeIcon>
                </button>
            </ol>
        </TagSelectionStyle>
    )
}


export {TagSelection};