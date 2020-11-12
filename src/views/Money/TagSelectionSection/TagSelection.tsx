import {TagSelectionStyle} from "./TagSelectionStyle";
import React, {useState, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {totalTags} from "../../../utils/icons";

type Props = {
    selectedTag: IconProp | undefined;
    onChange: (selected: IconProp) => void;
    selectedCategory: "-" | "+";
    displayedExpenditureTags: IconProp [];
    displayedIncomeTags: IconProp [];
    onAddNewExpenditureTag: (newTagList: IconProp[]) => void;
    onAddNewIncomeTag: (newTagList: IconProp[]) => void;
}

const TagSelection:React.FunctionComponent<Props> = (props) => {

    const displayedExpenditureTags = props.displayedExpenditureTags;
    const displayedIncomeTags = props.displayedIncomeTags;

    const [isDown, setDropdownStatus] = useState(false);

    const selectedTag = props.selectedTag;

    const tagsMenuRef = useRef<HTMLDivElement>(null);

    const dropdown = () =>{
        if(tagsMenuRef.current){
            setDropdownStatus((x) => x = !x);
            tagsMenuRef.current.style.top = isDown? "-100%" : "0%"
            tagsMenuRef.current.style.opacity = isDown? "0" : "1"
        }
    }

    const onSelectTag = (tagIcon: IconProp) => {
        props.onChange(tagIcon)
    }

    const onAddNewTag = (newTag: IconProp) => {
        if(props.selectedCategory === "-"){
            if(displayedExpenditureTags.indexOf(newTag)>=0){
                window.alert("Tag Already Exist")
            }else{
                    const copy = [...displayedExpenditureTags]
                    copy.push(newTag)
                    props.onAddNewExpenditureTag(copy)
                    dropdown();
            }
        }else{
            if(displayedIncomeTags.indexOf(newTag)>=0){
                window.alert("Tag Already Exist")
            }else{
                    const copy = [...displayedIncomeTags]
                    copy.push(newTag)
                    props.onAddNewIncomeTag(copy)
                    dropdown();
            }
        }
    }

    return(
        <TagSelectionStyle>
            <ol>
                {props.selectedCategory === "-"? 
                    displayedExpenditureTags.map(tag=>{
                        return(
                            <li key={tag.toString()} 
                            onClick={()=>onSelectTag(tag)} 
                            className={selectedTag === tag? "selected-tag" : ""}
                            >
                                <FontAwesomeIcon icon={tag}></FontAwesomeIcon>
                            </li>
                        )
                    })
                    :
                    displayedIncomeTags.map(tag=>{
                        return(
                            <li key={tag.toString()} 
                            onClick={()=>onSelectTag(tag)} 
                            className={selectedTag === tag? "selected-tag" : ""}
                            >
                                <FontAwesomeIcon icon={tag}></FontAwesomeIcon>
                            </li>
                        )
                    })
                }
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