import React from "react";
import Nav from "./Nav";
import styled from "styled-components";


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

    return (
        <Wrapper style={{height: `${height}px`}} >
          <Main>
            {props.children}
          </Main>
          <Nav/>
        </Wrapper>
      )
}

export default Layout;