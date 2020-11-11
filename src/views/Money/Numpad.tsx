import styled from "styled-components";

const Numpad = styled.section`
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  color: #333333;
  .display{
    width: 100;
    text-align: right;
    font-size: 3.6rem;
    line-height: 4.5rem;
    padding: 0 1.2rem;
    min-height: 4.5rem;
    background-color: white;
    font-weight: 400;
    box-shadow: inset 0 -5px 3px -5px rgba(0,0,0,0.25),
    inset 0 5px 3px -5px rgba(0,0,0,0.25);
  }

  .numbers{
    color: #333333;
    button{
      float: left;
      width: 25%;
      height: 6.4rem;
      border: none;
      outline: none;
      font-size: 3rem;
      font-weight: 200;

      &.okay{
        float: right;
        height: 12.8rem;
        font-weight: 400;
      }
      &.zero{
        width: 50%;
      }
      &.dot{
        font-weight: 500;
      }

      &:nth-child(1){
        background-color: #e4fff4;
      }
      &:nth-child(2),
      &:nth-child(5){
        background-color: #c7f3e1;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9){
        background-color: #9decca;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10){
        background-color: #7ee6b9;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13){
        background-color: #5ee4aa;
      }
      &:nth-child(14){
        background-color: #34dd94;
      }
      &:nth-child(12){
        background-color: #2cd68c;
      }
    }
  }

`

export {Numpad};