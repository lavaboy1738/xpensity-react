import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";


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
        padding: 0.2rem 0;
        width: 100%;
        color: #333333;
        i{
          font-size: 3.5rem; 
        }
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
                    <i className='bx bx-list-ul nav-icon'></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/money" activeClassName="selected">
                    <i className='bx bx-plus nav-icon' ></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/stats" activeClassName="selected">
                    <i className='bx bx-bar-chart nav-icon' ></i>
                  </NavLink>
                </li>
            </ul>
        </NavStyle>
    )
}

export default Nav;

