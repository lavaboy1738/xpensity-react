import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import {CategorySelection, Category} from "../components/CategorySelection";
import styled from "styled-components";
import {Chart} from "./Stats/Chart";
import {useStatement, NewStatement} from "../hooks/useStatement"
import day from "dayjs";

const StatsStyles = styled.div`
display: flex;
flex-direction: column;
height: 100%;
  .wrapper{
    flex-grow:1;
    overflow-x: auto;
  }
  .title{
    text-align: center;
    font-size: 2rem;
    font-weight: 200;
    padding-top: 1rem;
  }
`

const Stats = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("-");
  const {statements} = useStatement();
  const selectStatements = statements.filter(statement => statement.selectedCategory === selectedCategory)
  const hash: {[Key: string]: {total: number, statements: NewStatement[]}} = {};

  selectStatements.forEach(statement => {
    const key = day(statement.createdAt).format("MM/DD")
    if(!(key in hash)){
      hash[key] = {total: statement.amount, statements: [statement]}
    }else{
      hash[key].total += statement.amount;
      hash[key].statements.unshift(statement)
    }
  })

  const arrayByDate = Object.entries(hash).sort((a,b)=>{
    if(a[0] === b[0]){
      return 0
    }else if(a[0] > b[0]){
      return -1
    }else if(a[0] < b[0]){
      return 1
    }else{
      return 0
    }
  })

    return (
      <Layout>
        <StatsStyles>
          <CategorySelection selectedCategory={selectedCategory} 
          onChange={(value: Category) => setSelectedCategory(value)} ></CategorySelection>
          <div className="wrapper">
            <Chart selectedCategory={selectedCategory} value={arrayByDate} />
          </div>
          <div className="title">{selectedCategory === "-"? "Spending" : "Income"} Data of Past 30 Days</div>
        </StatsStyles>
      </Layout>
    )
  }


export default Stats