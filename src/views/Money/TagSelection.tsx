import styled from "styled-components";

const TagSelection = styled.section`
  overflow-x: hidden;
  background-color: #f8fffc;
  color: #333333;
  flex-grow: 1;
  ol{
    margin: -0.8rem -0.8rem;
    display: flex;
    flex-wrap: wrap;
    padding: 1.2rem;
    overflow-y: auto;
    li{
      margin: 0.8rem 0.8rem;
      width: 4rem;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #7fe0b6;
      font-size: 2rem;

      &.selected-tag{
        background-color:  #21d185;
        color: white;
      }
    }
    .new-tag{
        margin: 0.8rem 0.8rem;
        width: 4rem;
        height: 4rem;
        border: none;
        outline: none;
        background-color: #EEE;
        color: #444;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 2rem;
    }
  }
`

export {TagSelection};