import React, {useState} from "react";
import Layout from "../components/Layout";
import {CategorySelection} from "../views/Money/CategorySelection";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {useStatement} from "../hooks/useStatement";

const OverviewStyles = styled.div`
display: flex;
flex-direction: column;
  .details{
    flex-grow: 1;
    overflow-y: auto;
    background-color: red;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`

const Overview = () =>{
  const [selectedCategory, setSelectedCateory] = useState<"-" | "+">("-")
  const {statements} = useStatement();
    return (
      <Layout>
        <OverviewStyles>
          <CategorySelection selectedCategory={selectedCategory} 
            onChange={(value) => setSelectedCateory(value)} />
            <div className="details">
              {statements.map((statement)=>{
                return(
                  <Link to={`/overview/${statement.id}`}>
                    <i className = {statement.selectedTag}></i>
                    <span>{statement.comments}</span>
                    <span>{statement.amount}</span>
                  </Link>
                )
              })}
            </div>
        </OverviewStyles>
      </Layout>
    )
  }

export default Overview