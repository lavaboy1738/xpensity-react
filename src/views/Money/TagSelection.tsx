import styled from "styled-components";
import React, {useState, useRef} from "react";
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
            transition: 0.3s all ease;

            &.selected-tag{
                background-color:  #21d185;
                color: white;
                transition: 0.3s all ease;
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

    .new-tag-menu{
        position: absolute;
        top: -100%;
        left: 0;
        width: 100%;
        height: 60vh;
        background-color: #e3fbf1;
        z-index: 10;
        transition: 0.3s all ease;
        .title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #85eec0;
                font-size: 2rem;
                padding: 1rem;
                span{
                    font-size: 2rem;
                    font-weight: 300;
                }
                .invis{
                    opacity: 0;
                }
            }

                ul{
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
                }
        }
    }

`


const TagSelection:React.FunctionComponent = () => {

    const [tags, setTags] = useState<IconProp[]>(["home", "taxi", "dollar-sign", "book"])
    let [isDown, setDropdownStatus] = useState(false);
    let [selectedTag, setSelectedTag] = useState<IconProp>();

    const tagsMenuRef = useRef<HTMLDivElement>(null);

    const dropdown = () =>{
        if(tagsMenuRef.current){
            setDropdownStatus((x) => x = !x);
            tagsMenuRef.current.style.top = isDown? "-100%" : "0%"
        }
    }

    const onSelectTag = (tagIcon: IconProp) => {
        setSelectedTag((x)=> x = tagIcon);
    }

    return(
        <TagSelectionStyle>
            <ol>
                {tags.map(tag=>{
                    return(
                        <li key={tag.toString()} 
                        onClick={()=>onSelectTag(tag)} 
                        className={selectedTag === tag? "selected-tag" : ""}
                        >
                            <FontAwesomeIcon icon={tag}></FontAwesomeIcon>
                        </li>
                    )
                })}
                <button className="new-tag" onClick={dropdown}>
                <FontAwesomeIcon icon="plus"></FontAwesomeIcon>
                </button>
            </ol>
            <div className="new-tag-menu"  ref={tagsMenuRef} >
                <div className="title">
                    <FontAwesomeIcon icon="chevron-left" onClick={dropdown}></FontAwesomeIcon>
                    <span>Add New Tag</span>
                    <FontAwesomeIcon icon="chevron-left" className="invis"></FontAwesomeIcon>
                </div>
                <ul>
                    {tags.map(tag=>{
                            return(
                                <li key={tag.toString()}>
                                    <FontAwesomeIcon icon={tag}></FontAwesomeIcon>
                                </li>
                            )
                    })}
                </ul>
            </div>
        </TagSelectionStyle>
    )
}


export {TagSelection};