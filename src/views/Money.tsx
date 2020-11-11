import React from "react";
import Layout from "../components/Layout";


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faTaxi, faHome, faPlus, faDollarSign, faBook} from "@fortawesome/free-solid-svg-icons";

import {CategorySelection} from "./Money/CategorySelection";
import {TagSelection} from "./Money/TagSelection";
import {Comments} from "./Money/Comments";
import {Numpad} from "./Money/Numpad";

const Money = () => {
    return (
      <Layout>
        <CategorySelection>
          <ul>
            <li className="selected category-left">Expenditure</li>
            <li className="category-right">Income</li>
          </ul>
        </CategorySelection>
        <TagSelection>
          <ol>
            <li>
              <FontAwesomeIcon icon="home"></FontAwesomeIcon>
            </li>
            <li>
            <FontAwesomeIcon icon="taxi"></FontAwesomeIcon>
            </li>
            <li className = "selected-tag">
            <FontAwesomeIcon icon="dollar-sign"></FontAwesomeIcon>
            </li>
            <li>
            <FontAwesomeIcon icon="book"></FontAwesomeIcon>
            </li>
            <button className="new-tag">
              <FontAwesomeIcon icon="plus"></FontAwesomeIcon>
            </button>
          </ol>
        </TagSelection>
        <Comments>
          <input type="text" placeholder="Add Comments"/>
        </Comments>
        <Numpad>
          <div className="display">
            1738
          </div>
          <div className="numbers clearfix">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>Del.</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>C</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="okay">OK</button>
            <button className="zero">0</button>
            <button className="dot">.</button>
          </div>
        </Numpad>
      </Layout>
    )
  }

export default Money