import React, { useState } from "react";
import Layout from "../components/Layout";// import {faTaxi, faHome, faPlus, faDollarSign, faBook} from "@fortawesome/free-solid-svg-icons";


import {CategorySelection} from "./Money/CategorySelection";
import {TagSelection} from "./Money/TagSelectionSection/TagSelection";
import {Comments} from "./Money/Comments";
import {Numpad} from "./Money/NumpadSection/Numpad";

import {useStatement} from "../hooks/useStatement";
import {useHistory} from "react-router-dom";

type Category = "-" | "+";

const defaultData = {
  selectedTag: "" as string,
  selectedCategory: "-" as Category,
  comments: "",
  amount: "0",
  id: 0,
  createdAt: ""
}

const Money = () => {
    const [selected, setSelected] = useState(defaultData);
    const history = useHistory();

    const unifiedOnChange = (obj: Partial<typeof selected>) =>{
      setSelected({
        ...selected,
        ...obj
      })
    }

    const {addStatement} = useStatement();

    const submit = () => {
      const result = addStatement(selected);
      if(result){
        alert("Success");
        history.push("/overview")
      }
    }

    return (
      <Layout>
        <CategorySelection selectedCategory={selected.selectedCategory} onChange={(category)=> unifiedOnChange({selectedCategory: category})} />
        <TagSelection 
        selectedTag = {selected.selectedTag} 
        onChange={(selectedTag) => unifiedOnChange({selectedTag}) } 
        selectedCategory = {selected.selectedCategory}
        />
        <Comments value={selected.comments} onChange={(newComment) => unifiedOnChange({comments: newComment})} />
        <Numpad value={selected.amount} onChange={(newAmount) => unifiedOnChange({amount: newAmount})} onOk={()=>{submit()}} />
      </Layout>
    )
  }

export default Money