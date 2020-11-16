import {TagSelectionStyle} from "./TagSelectionStyle";
import React, {useState, useRef} from "react";
import {otherTags} from "../../../utils/useTags";


type Props = {
    selectedTag: string;
    onChange: (selected: string) => void;
    selectedCategory: "-" | "+";
    displayedExpenditureTags: string [];
    displayedIncomeTags: string [];
    onAddNewExpenditureTag: (newTagList: string[]) => void;
    onAddNewIncomeTag: (newTagList: string[]) => void;
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

    const onSelectTag = (tagIcon: string) => {
        props.onChange(tagIcon)
    }

    const onAddNewTag = (newTag: string) => {
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
                            <li key={tag} 
                            onClick={()=>onSelectTag(tag)} 
                            className={selectedTag === tag? "selected-tag" : ""}
                            >
                                <i className={tag} ></i>
                            </li>
                        )
                    })
                    :
                    displayedIncomeTags.map(tag=>{
                        return(
                            <li key={tag} 
                            onClick={()=>onSelectTag(tag)} 
                            className={selectedTag === tag? "selected-tag" : ""}
                            >
                                <i className={tag} ></i>
                            </li>
                        )
                    })
                }
                <button className="new-tag" onClick={dropdown}>
                    <i className='bx bx-plus' ></i>
                </button>
            </ol>
            <div className="new-tag-menu"  ref={tagsMenuRef} >
                <div className="title">
                    <i className="bx bx-chevron-left" onClick={dropdown}></i>
                    <span>Add New Tag</span>
                    <i className="bx bx-chevron-left invis" onClick={dropdown}></i>
                </div>
                <ul>
                    {otherTags.map(tag=>{
                            return(
                                <li key={tag} onClick={()=>onAddNewTag(tag)}>
                                    <i className={tag}></i>
                                </li>
                            )
                    })}
                </ul>
            </div>
        </TagSelectionStyle>
    )
}


export {TagSelection};