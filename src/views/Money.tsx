import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTaxi, faHome, faPlus, faDollarSign, faBook} from "@fortawesome/free-solid-svg-icons";

const primaryColor = "#68e2ae";

const Numpad = styled.section`
  display: flex;
  flex-direction: column;
  color: #333333;
  .display{
    width: 100;
    text-align: right;
    font-size: 3.6rem;
    line-height: 4.5rem;
    padding: 0 1.2rem;
    min-height: 4.5rem;
    background-color: white;
    font-weight: 400;
    box-shadow: inset 0 -5px 3px -5px rgba(0,0,0,0.25),
    inset 0 5px 3px -5px rgba(0,0,0,0.25)
    ;
  }
  .numbers{
    color: #333333;
    button{
      float: left;
      width: 25%;
      height: 6.4rem;
      border: none;
      outline: none;
      font-size: 3rem;
      font-weight: 200;

      &.okay{
        float: right;
        height: 12.8rem;
        font-weight: 400;
      }
      &.zero{
        width: 50%;
      }
      &.dot{
        font-weight: 500;
      }

      &:nth-child(1){
        background-color: #e4fff4;
      }
      &:nth-child(2),
      &:nth-child(5){
        background-color: #c7f3e1;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9){
        background-color: #9decca;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10){
        background-color: #7ee6b9;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13){
        background-color: #5ee4aa;
      }
      &:nth-child(14){
        background-color: #34dd94;
      }
      &:nth-child(12){
        background-color: #2cd68c;
      }
    }
  }

`

const Comments = styled.section`
  input{
    color: #333333;
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
  flex-grow: 1;
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
      position: relative;
      overflow: hidden;
      z-index: 1;

      &::after{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #68e2ae;
        top: 0;
        z-index: -1;
        transition: 0.3s all ease;
      }

      &.category-left::after{
        right: -100%;
      }
      &.category-right::after{
        left: -100%;
      }

      &.selected{
          &.category-left::after{
          right: 0%;
        }
        &.category-right::after{
          left: 0%;
        }
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
            <li className="selected category-left">Expenditure</li>
            <li className="category-right">Income</li>
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