import React, { useState } from "react";
import Layout from "../components/Layout";// import {faTaxi, faHome, faPlus, faDollarSign, faBook} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


import {CategorySelection} from "./Money/CategorySelection";
import {TagSelection} from "./Money/TagSelectionSection/TagSelection";
import {Comments} from "./Money/Comments";
import {Numpad} from "./Money/NumpadSection/Numpad";

type Category = "-" | "+";

const Money = () => {
    const [selected, setSelected] = useState({
      displayedExpenditureTags:["home", "running", "bus", "tools", "book", "baby", "utensils", "shopping-cart", "paw", "plane"] as IconProp [],
      displayedIncomeTags:["piggy-bank", "money-check-alt", "dollar-sign", "gift", "money-check"] as IconProp[],
      selectedTag: undefined as undefined | IconProp,
      selectedCategory: "-" as Category,
      comments: "",
      amount: 0
    });
    return (
      <Layout>
        <CategorySelection selectedCategory={selected.selectedCategory} onChange={(category) => setSelected({
          ...selected,
          selectedCategory: category
        })} />
        <TagSelection selectedTag = {selected.selectedTag} 
        onChange={(tag) => setSelected({
          ...selected,
          selectedTag: tag
        })} 
        selectedCategory = {selected.selectedCategory}
        displayedExpenditureTags = {selected.displayedExpenditureTags}
        displayedIncomeTags = {selected.displayedIncomeTags}
        onAddNewExpenditureTag = {(newTagList) => setSelected({
          ...selected,
          displayedExpenditureTags: newTagList
        })}
        onAddNewIncomeTag = {(newTagList) => setSelected({
          ...selected,
          displayedIncomeTags: newTagList
        })}
        />
        <Comments value={selected.comments} onChange={(newComment) => setSelected({
          ...selected,
          comments: newComment
        })} />
        <Numpad onChange={(newAmount) => setSelected({
          ...selected,
          amount: newAmount
        })}/>
      </Layout>
    )
  }

export default Money