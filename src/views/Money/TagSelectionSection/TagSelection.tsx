import {TagSelectionStyle} from "./TagSelectionStyle";
import React, {useState, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const TagSelection:React.FunctionComponent = () => {

    const [displayedTags, setDisplayedTags] = useState<IconProp[]>(["home", "taxi", "dollar-sign", "book"])
    const [isDown, setDropdownStatus] = useState(false);
    const [selectedTag, setSelectedTag] = useState<IconProp>();

    const tagsMenuRef = useRef<HTMLDivElement>(null);

    const dropdown = () =>{
        if(tagsMenuRef.current){
            setDropdownStatus((x) => x = !x);
            tagsMenuRef.current.style.top = isDown? "-100%" : "0%"
            tagsMenuRef.current.style.opacity = isDown? "0" : "1"
        }
    }

    const onSelectTag = (tagIcon: IconProp) => {
        setSelectedTag((x)=> x = tagIcon);
    }

    return(
        <TagSelectionStyle>
            <ol>
                {displayedTags.map(tag=>{
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
                    {displayedTags.map(tag=>{
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