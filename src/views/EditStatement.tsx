import React from "react";
import Layout from "../components/Layout"
import styled from "styled-components";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


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
        font-size: 2rem;
        padding: 1rem;
        min-height: 4rem;
        a{
            font-size: inherit;
        }
        span{
            font-size: 2rem;
            font-weight: 300;
        }
        .invis{
            opacity: 0;
            font-size: inherit;
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
                .icon{
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

const EditStatement:React.FunctionComponent = () => {
    return (
        <Layout>
            <StatementStyles>
                <div className="top-bar">
                    <Link to={"/overview"}>
                        <FontAwesomeIcon icon="chevron-left"></FontAwesomeIcon>
                    </Link>
                    <span>Details</span>
                    <FontAwesomeIcon icon="chevron-left" className="invis"></FontAwesomeIcon>
                </div>
                <div className="details">
                    <div className="details-content">
                        <div className="details-content-type">
                            <span>Type:</span>
                            <FontAwesomeIcon icon="hamburger" className="icon"></FontAwesomeIcon>
                        </div>
                        <div className="details-content-amount">
                            <span>Amount:</span>
                            <span>$26</span>
                        </div>
                        <div className="details-content-time">
                            <span>Time:</span>
                            <span>2020-11-14 14:26:35</span>
                        </div>
                        <div className="details-content-comments">
                            <span>Had lunch with Erich on tuesday evening then we went to the park and took a few shots</span>
                        </div>
                        <div className="button-wrapper">
                            <button className="delete">Delete</button>
                        </div>
                    </div>
                </div>
            </StatementStyles>
        </Layout>
    )
}

export {EditStatement}