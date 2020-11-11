import React from "react";
import Layout from "../components/Layout";// import {faTaxi, faHome, faPlus, faDollarSign, faBook} from "@fortawesome/free-solid-svg-icons";

import {CategorySelection} from "./Money/CategorySelection";
import {TagSelection} from "./Money/TagSelection";
import {Comments} from "./Money/Comments";
import {Numpad} from "./Money/Numpad";

const Money = () => {
    return (
      <Layout>
        <CategorySelection/>
        <TagSelection/>
        <Comments/>
        <Numpad/>
      </Layout>
    )
  }

export default Money