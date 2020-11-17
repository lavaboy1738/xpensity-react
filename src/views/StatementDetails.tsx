import React from "react";
import Layout from "../components/Layout"
import styled from "styled-components";
import { Link, useParams, useHistory } from "react-router-dom";
import {useStatement} from "../hooks/useStatement";
import day from "dayjs"



const StatementStyles = styled.div`
display: flex;
flex-direction: column;
overflow: hidden;
height: 100vh;
    .top-bar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #85eec0;
        padding: 0.4rem;
        i{
            font-size: 3rem;
        }
        span{
            font-size: 2rem;
            font-weight: 300;
        }
        .invis{
            opacity: 0;
        }
    }
    .details{
        background-color: #f8fffc;
        flex-grow: 1;
        padding: 3rem;
        &-content{
            display: flex;
            flex-direction: column;
            font-weight: 300;

            &-type{
                display: flex;
                justify-content: space-between;
                margin-bottom: 1rem;
                span{
                    font-size: 1.8rem;
                }
                i{
                    font-size: 1.8rem;
                }
            }
            &-amount{
                display: flex;
                justify-content: space-between;
                margin-bottom: 1rem;
                span{
                    font-size: 1.8rem;
                }
            }
            &-time{
                display: flex;
                justify-content: space-between;
                margin-bottom: 2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            &-comments{
                span{
                    font-size: 1.8rem;
                }
            }
            .button-wrapper{
                text-align: center;
                margin-top: 4rem;
                .delete{
                    border: none;
                    padding: 0.6rem 1.5rem;
                    font-size: 1.5rem;
                    background-color: #85eec0;
                    color: #333;
                    border-radius: 5px;
                    outline: none;
                }
            }
        }
    }

`

type Params = {
    statementID: string
}

const EditStatement:React.FunctionComponent = () => {
    const {statementID} = useParams<Params>();
    const {getStatement, deleteStatement} = useStatement();
    const history = useHistory();
    const currentStatement = getStatement(statementID) || {}

    const deleteRecord = () => {
        const answer = window.confirm("Delete current record?")
        if(answer){
            deleteStatement(statementID)
            alert("Success")
            history.push("/overview");
        }
    }


    return (
        <Layout>
            <StatementStyles>
                <div className="top-bar">
                    <Link to={"/overview"}>
                        <i className='bx bx-chevron-left' ></i>
                    </Link>
                    <span>Details</span>
                        <i className='bx bx-chevron-left invis' ></i>
                </div>
                <div className="details">
                    <div className="details-content">
                        <div className="details-content-type">
                            <span>Type:</span>
                            <i className={currentStatement.selectedTag}></i>
                        </div>
                        <div className="details-content-amount">
                            <span>Amount:</span>
                            <span>{currentStatement.amount}</span>
                        </div>
                        <div className="details-content-time">
                            <span>Time:</span>
                            <span>{day(currentStatement.createdAt).format("MMM-D HH:mm:ss")}</span>
                        </div>
                        <div className="details-content-comments">
                            <span>{currentStatement.comments}</span>
                        </div>
                        <div className="button-wrapper">
                            <button className="delete" onClick={deleteRecord}>Delete</button>
                        </div>
                    </div>
                </div>
            </StatementStyles>
        </Layout>
    )
}

export {EditStatement}