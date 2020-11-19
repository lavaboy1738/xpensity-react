import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import {Desktop} from "../views/Desktop";


const height = window.innerHeight;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  touch-action: manipulation;
`

const Main = styled.div`
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  flex-direction: column;
`


const Layout = (props: any) => {
  const width = window.innerWidth;

    return (
      <>
          {width > 400? 
          <Desktop/>
          :
          <Wrapper style={{height: `${height}px`}} >
          <Main>
            {props.children}
          </Main>
          <Nav/>
        </Wrapper>
        }
      </>
      )
}

export default Layout;