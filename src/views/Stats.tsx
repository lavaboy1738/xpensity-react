import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import {CategorySelection, Category} from "../components/CategorySelection";
import styled from "styled-components";
import {Chart} from "./Stats/Chart";

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

    return (
      <Layout>
        <StatsStyles>
          <CategorySelection selectedCategory={selectedCategory} 
          onChange={(value: Category) => setSelectedCategory(value)} ></CategorySelection>
          <div className="wrapper">
            <Chart selectedCategory={selectedCategory} />
          </div>
          <div className="title">Spending Data of Past 30 Days</div>
        </StatsStyles>
      </Layout>
    )
  }


export default Stats