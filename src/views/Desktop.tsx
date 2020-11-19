import React from "react";
import styled, {keyframes} from "styled-components";
import phone from "../images/image1.png";
import QRCode from "../images/QRCode.png";

const desktopAnimations = keyframes`
        0%{
            opacity: 0;
        }
        40%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
`

const DesktopStyles = styled.div`
        background-image: linear-gradient(78deg, transparent 0%, transparent 36%,rgba(104,226,174, 0.09) 36%, rgba(104,226,174, 0.09) 56%,transparent 56%, transparent 100%),linear-gradient(30deg, transparent 0%, transparent 2%,rgba(104,226,174, 0.12) 2%, rgba(104,226,174, 0.12) 75%,transparent 75%, transparent 100%),linear-gradient(206deg, transparent 0%, transparent 68%,rgba(104,226,174, 0.16) 68%, rgba(104,226,174, 0.16) 99%,transparent 99%, transparent 100%),linear-gradient(90deg, rgba(104,226,174, 0.12),rgba(104,226,174, 0.12));
        
        
        width: 100vw;
        height: 100vh;
        .content {
            position: absolute;
            max-width: 800px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            &-left {
                width: 55%;
                &-upper{
                    text-align: center;
                    font-size: 2.8rem;
                    font-weight: 300;
                    margin-bottom: 1.5rem;
                    animation: ${desktopAnimations} 1s ease-out 2s backwards;
                }
                &-lower{
                    p{
                        margin-bottom: 2.2rem;
                        font-size: 1.8rem;
                        font-weight: 200;
                        line-height: 2.5rem;
                        animation: ${desktopAnimations}  1s ease-out 2.3s backwards;
                        strong{
                            font-size: 1.8rem;
                            font-weight: 400;
                        }
                    }
                    .code{
                        margin-top: 2.5rem;
                        text-align: center;
                        animation: ${desktopAnimations}  1s ease-out 2.6s backwards;
                        img{
                            width: 180px;
                        }
                    }
                }
            }
            &-right{
                width: 43%;
                display: flex;
                justify-content: center;
                align-items: center;
                animation: ${desktopAnimations}  1s ease-out 3s backwards;
                img{
                    width: 100%;
                }
            }
        }
`


const Desktop = () => {
    return(
        <DesktopStyles>
            <div className="content">
                <div className="content-left">
                    <div className="content-left-upper">
                        Welcome to Xpensity
                    </div>
                    <div className="content-left-lower">
                            <p>
                                Xpensity is a personal accounting SPA built to keep track of income and expenditures.
                                <br/>
                                It's designed to be <strong>mobile-only</strong> for quick use.
                            </p>
                            <p>To see it on mobile, simply:</p>

                            <p>1. Open camera on your mobile device
                                <br/>
                                2. Scan the QR code below
                                <br/>
                                3. Open the link in your default browser
                            </p>
                            <div className="code">
                                <img src={QRCode} alt=""/>
                            </div>
                    </div>
                </div>
                <div className="content-right">
                    <img src={phone} alt=""/>
                </div>
            </div>
        </DesktopStyles>
    )
}

export {Desktop}