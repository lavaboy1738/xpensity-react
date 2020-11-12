import {TagSelectionStyle} from "./TagSelectionStyle";
import React, {useState, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {totalTags} from "../../../utils/icons";

const TagSelection:React.FunctionComponent = () => {

    const [displayedTags, setDisplayedTags] = useState<IconProp[]>(["home", "running", "bus", "tools", "book", "baby", "utensils", "shopping-cart", "paw", "plane"])
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

    const onAddNewTag = (newTag: IconProp) => {
        if(displayedTags.indexOf(newTag)>=0){
            window.alert("Tag Already Exist")
        }else{
            setDisplayedTags(()=>{
                const duplicate = [...displayedTags]
                duplicate.push(newTag)
                return duplicate
            })
            dropdown();
        }
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
                    {totalTags.map(tag=>{
                            return(
                                <li key={tag.toString()} onClick={()=>onAddNewTag(tag)}>
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