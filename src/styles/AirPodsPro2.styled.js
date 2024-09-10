import styled, { keyframes } from "styled-components";

export const aniSlide = keyframes`
to {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
    }
`;

export const LocalNavWrapper = styled.nav`
  position: absolute;
  top: 50px;
  z-index: 98;
  width: 100%;
  height: 52px;
  background-color: transparent;
  color: var(--color-f57);
  transition: background 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
  .local-nav {
    max-width: 1024px;
    height: 52px;
    padding: 0 24px;
    a {
      padding: 6px 10px;
      border-radius: 100px;
      background-color: var(--color-06c);
      font-weight: 500;
      font-size: 0.7rem;
    }
  }
`;

export const Section0 = styled.section`
  overflow: hidden;
  height: 100vh;
  video {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
  }
  .tit-wrapper {
    width: 100%;
    height: 100%;
    opacity: 0;    
    transform: scale(.8);
    animation: ${aniSlide} 1s 1s cubic-bezier(0.455, 0.03, 0.415, 0.955) forwards; 
    .flex-wrapper {
      width: 100%;
      height: 100%;
    }
    p {
      font-weight: 700;
      font-size: 8vw;
      color: var(--color-fff);
      text-align: center;
      opacity: 0;    
      transform: scale(.8);
    }
    h1 {
      font-size: 14vw;
      color: var(--color-fff);
      text-align: center;
      letter-spacing: -3px;
      opacity: 1;    
      transform: scale(1);
    }
    .canvas-wrapper {
      top: 0;
      width: 100%;
      height: 100%;
      .p {
        width: 100%;
        padding-bottom: 21%;
      }
      .m {
        display: none;
      }
    }
  }
  .button-wrapper {
    bottom: 100px;
    width: 100%;
    opacity: 0;
    transform: translate3d(0, -50px, 0);
    animation: ${aniSlide} 1s 1.1s cubic-bezier(0.455, 0.03, 0.415, 0.955) forwards;
    a {
      margin: 0 30px;
      font-weight: 600;
      font-size: 22px;
      color: var(--color-fff);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .text-wrapper {
    width: 100%;
    height: 100%;
    padding: 0 12%;
    transform: translate3d(0, 100%, 0);
    span {
      font-weight: 600;
      font-size: 20px;
      color: var(--color-fff);
      opacity: .1;
    }
  }
  .obj {
    display: block;
  }
  @media (max-width: 734px) {
    .tit-wrapper p {
      z-index: 1;
      font-size: 8vw;
    }
    .tit-wrapper h1 {
      z-index: 1;
      margin-top: 160px;
      font-size: 58px;
    }
    .canvas-wrapper .p {
      display: none;
    }
    .canvas-wrapper .m {
      display: block !important;
      margin-top: -220px;
    }
    .button-wrapper {
      bottom: 20vh;
    }
    .button-wrapper .btn {
      flex-direction: column;
      gap: 4px;
    }
    .button-wrapper a {
      font-size: 16px;
    }
  }
`;

export const Section1 = styled.section`
  color: var(--color-fff);
  .block-1 {
    border-bottom: 1px solid rgba(245,245,245,.3);
  }
  .txt-wrapper {      
    max-width: 1024px;
    padding: 0 24px;
    p {
      font-weight: 600;
      font-size: 30px;
      &:last-child {
        max-width: 800px;
        padding: 40px 0 110px;
      }
    }
    h1 {
      padding-top: 30px;
      font-weight: 600;
      font-size: 114px;
      letter-spacing: -1px;
      line-height: 124px;
    }
  } 
  .block-2 {
    text-align: center;
    div {
      width: 50%;
      height: 538px;
      border-bottom: 1px solid rgba(245,245,245,.3);
      &:last-child {
        padding: 7.5vw 12vw;
        border-left: 1px solid rgba(245,245,245,.3);
        text-align: left;
      }
      p {
        font-weight: 700;
        font-size: 28px;
        color: #6e6e73;
        span {
          font: inherit;
          color: #fff;
        }
      }
    }
  }
  @media (max-width: 1068px) {
    .block-1 .txt-wrapper {
      padding: 0 6%;
    }
    .block-1 .txt-wrapper p {
      font-size: 24px;
    }
    .block-1 .txt-wrapper p:last-child {
      padding: 30px 0 110px;
      font-size: 20px;
    }
    .block-1 .txt-wrapper h1 {
      font-size: 80px;
      line-height: 84px;
    }
    .block-2 {
      flex-direction: column;
      align-items: center;
    }
    .block-2 div {
      width: 100%;
    }
    .block-2 div:last-child {
      justify-content: center;
      border-bottom: 1px solid rgba(245,245,245,.3);
      border-left: 0;
    }
    .block-2 div p {
      max-width: 460px;
    }
  }
  @media (max-width: 734px) {
    .block-1 .txt-wrapper {
      padding: 0 12%;
    }
    .block-1 .txt-wrapper h1 {
      font-size: 46px;
      line-height: 56px;
    }
    .block-2 div {
      display: flex;
      justify-content: center;
      height: 332px;
    }
    .block-2 div video {
      width: 280px;
    }
    .block-2 div p {
      font-size: 20px;
    }
  }
`;

export const Section2 = styled.section`
  overflow: hidden;
  position: relative;
  text-align: center;
  .scroll-motion-1,
  .scroll-motion-2,
  .scroll-motion-3 {
    top: 200px;
    left: 50%;
    width: 1024px;
    max-width: 1024px;
    transform: translate3d(-50%, 0, 0);
  }
  video {
    top: -65px;
    left: 50%;
    width: 1440px;
    height: 1050px;
    margin-left: -700px;
    opacity: 0;
    transform: scale(1.1);
  }
  .scroll-motion-1 img {
    opacity: 1;
    transform: scale(1);
  }
  .scroll-motion-2 img,
  .scroll-motion-3 img {
    opacity: 0;
    transform: scale(1);
  }
  .scroll-motion-1 p {
    bottom: 0;
    left: 0;
    width: 300px;
    font-weight: 600;
    font-size: 20px;
    color: #6e6e73;
    text-align: left;
    opacity: 0;
    transform: translate3d(0,0,0);
  }
  .scroll-motion-2 p {
    bottom: 0;
    right: 0;
    width: 300px;
    font-weight: 600;
    font-size: 20px;
    color: #6e6e73;
    text-align: left;
    opacity: 0;
    transform: translate3d(0,0,0);
  }
  p span {
    font: inherit;
    color: #fff;
    &.color-g {
      color: #00ff41;
    }
  }
  @media (max-width: 1068px) {
    .scroll-motion-1,
    .scroll-motion-2,
    .scroll-motion-3 {
      top: 250px;
    }
    .scroll-motion-1 p,
    .scroll-motion-2 p {
      top: -100px;
      left: 50%;
      width: 600px;
      margin-left: -300px;
    }
  }
  @media (max-width: 734px) {  
    .scroll-motion-1,
    .scroll-motion-2 {
      top: 50%;
      margin-top: -123px;
    }
    .scroll-motion-3 {
      top: 50%;
      margin-top: -163px;
    }
    .scroll-motion-1 p,
    .scroll-motion-2 p {
      width: 280px;
      margin-left: -140px;
      font-size: 16px;
    }
    video {
      top: 50%;
      width: 1220px;
      height: 972px;
      margin-top: -486px;
      margin-left: -600px;
    }
  }
`;