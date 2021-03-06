import React, {useState} from "react";
import Layout from "../components/Layout";
import {CategorySelection} from "../components/CategorySelection";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {NewStatement, useStatement} from "../hooks/useStatement";
import {NoData} from "../components/NoData";
import day from "dayjs";
import dayjs from "dayjs";

const OverviewStyles = styled.div`
display: flex;
flex-direction: column;
overflow-y: auto;
  .details{
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    .statements-by-date{
      .title{
        background-color: #74e9b6;
        padding: 0.3rem 1rem;
        display: flex;
        justify-content: space-between;
        .date{
          font-size: 2.2rem;
          font-weight: 200;
        }
        .total{
          font-size: 2.2rem;
          font-weight: 300;
        }
      }
      .statements{
        .statement{
          padding: 0.4rem 1rem;
          display: block;
          display: flex;
          justify-content: space-between;
          &:nth-child(odd){
            background-color: #f8fffc;
          }
          &:nth-child(even){
            background-color: #e8fdf4;
          }
          i{
            font-size: 2rem;
            margin-right: 1.5rem;
          }
          span{
            font-size: 1.8rem;
          }
          .comments{
            line-height: 1.8rem;
            opacity: 0.5;
            flex-grow: 1;
            font-weight: 200;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .amount{
            margin-left: 1.5rem;
            font-weight: 300;
          }
        }
      }
    }
  }
`

const Overview = () =>{
  const [selectedCategory, setSelectedCateory] = useState<"-" | "+">("-")
  const {statements} = useStatement();
  const selectStatements = statements.filter(statement => statement.selectedCategory === selectedCategory)
  const hash: {[Key: string]: {total: number, statements: NewStatement[]}} = {};

  selectStatements.forEach(statement => {
    const key = day(statement.createdAt).format("YYYY-MM-DD")
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

  //convert the dates to todayy yesterday and so on
  const oneDay = 86400*1000;
  const convertDate = (date: string)=>{
      const day = dayjs(date);
      const now = new Date();
      if(day.isSame(now, "day")){
          return "Today";
      }else if(day.isSame(now.valueOf() - oneDay, "day")){
          return "Yesterday";
      }else if(day.isSame(now, "year")){
          return day.format("MMM DD");
      }else{
          return day.format("YYYY-MM-DD");
      }
  }

    return (
      <Layout>
        <OverviewStyles>
          <CategorySelection selectedCategory={selectedCategory} 
            onChange={(value) => setSelectedCateory(value)} />
            {arrayByDate.length===0?
            <NoData/>
            :
            <div className="details">
              {arrayByDate.map(([date, values])=>{
                return(
                  <div className = "statements-by-date" key={date} >
                    <div className="title">
                        <span className="date">{convertDate(date)}</span>
                        <span className="total">${values.total}</span>
                    </div>
                    <div className="statements">
                        {values.statements.map((statement)=>{
                          return(
                            <Link to={`/overview/${statement.id}`} key={statement.id} className="statement">
                              <i className = {statement.selectedTag}></i>
                              <span className="comments">{statement.comments}</span>
                              <span className="amount">${statement.amount}</span>
                            </Link>
                          )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
            }
        </OverviewStyles>
      </Layout>
    )
  }

export default Overview