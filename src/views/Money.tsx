import React, { useState } from "react";
import Layout from "../components/Layout";// import {faTaxi, faHome, faPlus, faDollarSign, faBook} from "@fortawesome/free-solid-svg-icons";


import {CategorySelection} from "./Money/CategorySelection";
import {TagSelection} from "./Money/TagSelectionSection/TagSelection";
import {Comments} from "./Money/Comments";
import {Numpad} from "./Money/NumpadSection/Numpad";

import {useTags} from "../utils/useTags";

type Category = "-" | "+";

const Money = () => {
    const [selected, setSelected] = useState({
      displayedExpenditureTags: useTags().expenditureTags,
      displayedIncomeTags: useTags().incomeTags ,
      selectedTag: "" as string,
      selectedCategory: "-" as Category,
      comments: "",
      amount: 0
    });

    const unifiedOnChange = (obj: Partial<typeof selected>) =>{
      setSelected({
        ...selected,
        ...obj
      })
    }

    return (
      <Layout>
        <CategorySelection selectedCategory={selected.selectedCategory} onChange={(category)=> unifiedOnChange({selectedCategory: category})} />
        <TagSelection 
        selectedTag = {selected.selectedTag} 
        onChange={(selectedTag) => unifiedOnChange({selectedTag}) } 
        selectedCategory = {selected.selectedCategory}
        displayedExpenditureTags = {selected.displayedExpenditureTags}
        displayedIncomeTags = {selected.displayedIncomeTags}
        onAddNewExpenditureTag = {(newTagList) => unifiedOnChange({displayedExpenditureTags: newTagList})}
        onAddNewIncomeTag = {(newTagList) => unifiedOnChange({displayedIncomeTags: newTagList})}
        />
        <Comments value={selected.comments} onChange={(newComment) => unifiedOnChange({comments: newComment})} />
        <Numpad onChange={(newAmount) => unifiedOnChange({amount: newAmount})}/>
      </Layout>
    )
  }

export default Money