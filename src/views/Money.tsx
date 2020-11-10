import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTaxi, faHome, faPlus, faDollarSign, faBook} from "@fortawesome/free-solid-svg-icons";

const primaryColor = "#68e2ae";

const Numpad = styled.section`
`

const Comments = styled.section`
  input{
    border: none;
    outline: none;
    padding: 0 1.2rem;
    height: 3.5rem;
    background-color: #d3faea;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 200;
  }

`

const TagSelection = styled.section`
  background-color: #f8fffc;
  color: #333333;
  ul{
    display: flex;
    min-height: 4.5rem;
    li{
      width: 50%;
      font-size: 2.5rem;
      font-weight: 200;
      text-align: center;
      background-color: #b4ecd5;
      line-height: 4.5rem;

      &.selected{
        background-color:#68e2ae;
      }
    }
  }
  ol{
    margin: -0.8rem -0.8rem;
    display: flex;
    padding: 1.2rem;
    li{
      margin: 0.8rem 0.8rem;
      width: 4rem;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #7fe0b6;
      font-size: 2rem;

      &.selected-tag{
        background-color:  #21d185;
        color: white;
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
`

const Money = () => {
    return (
      <Layout>
        <TagSelection>
          <ul>
            <li className="selected">Expenditure</li>
            <li>Income</li>
          </ul>
          <ol>
            <li>
              <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
            </li>
            <li>
            <FontAwesomeIcon icon={faTaxi}></FontAwesomeIcon>
            </li>
            <li className = "selected-tag">
            <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
            </li>
            <li>
            <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
            </li>
            <button className="new-tag">
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </button>
          </ol>
        </TagSelection>
        <Comments>
          <input type="text" placeholder="Add Comments"/>
        </Comments>
        <Numpad>
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
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </Numpad>
      </Layout>
    )
  }

export default Money