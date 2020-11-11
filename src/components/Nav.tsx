import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faList, faChartBar} from "@fortawesome/free-solid-svg-icons";


const NavStyle = styled.nav`
  min-height: 4rem;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);

  ul{
    display: flex;
    li{
      width: 33.33333%;
      display: flex;
      justify-content: center;
      align-items: center;
      a{
        text-align: center;
        padding: 0.3rem 0;
        width: 100%;
        font-size: 3rem;
        color: #333333;
          &.selected{
          background-color: #68e2ae;
          .nav-icon{
            color: #ffffff;
          }
        }
      }
    }
  }
`

const Nav = () => {
    return(
        <NavStyle>
            <ul>
                <li>
                  <NavLink to="/overview" activeClassName="selected">
                      <FontAwesomeIcon icon={faList} className = "nav-icon"></FontAwesomeIcon>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/money" activeClassName="selected">
                    <FontAwesomeIcon icon={faPlus} className = "nav-icon"></FontAwesomeIcon>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/stats" activeClassName="selected">
                    <FontAwesomeIcon icon={faChartBar} className = "nav-icon"></FontAwesomeIcon>
                  </NavLink>
                </li>
            </ul>
        </NavStyle>
    )
}

export default Nav;

