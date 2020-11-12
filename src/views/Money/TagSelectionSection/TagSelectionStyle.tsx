import styled from "styled-components";

const TagSelectionStyle = styled.section`
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
            transition: 0.3s all ease;

            &.selected-tag{
                background-color:  #21d185;
                color: white;
                transition: 0.3s all ease;
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

    .new-tag-menu{
        position: absolute;
        top: -100%;
        left: 0;
        width: 100%;
        height: 60vh;
        opacity: 0;
        background-color: #e3fbf1;
        z-index: 10;
        transition: 0.8s all cubic-bezier(0.25, 1, 0.5, 1);
        border-bottom: 2px solid white;
        .title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #85eec0;
                font-size: 2rem;
                padding: 1rem;
                span{
                    font-size: 2rem;
                    font-weight: 300;
                }
                .invis{
                    opacity: 0;
                }
            }

                ul{
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
                    box-shadow:  0 -5px 3px -5px rgba(0,0,0,0.25);
                }
        }
    }

`

export {TagSelectionStyle}
