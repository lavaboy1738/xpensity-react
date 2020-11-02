import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  color: blue;
  font-size: 20px;
  border: none;
  outline: none;
  background-color: orange;
  &:hover{
    cursor:pointer;
    background: red;
  }
`;

function App() {
  return (
    <div>
      <StyledButton>holla</StyledButton>
    </div>
  );
}

export default App;
