import styled, {keyframes} from "styled-components";

export const aniSlide = keyframes`
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

export const aniSpin = keyframes`
  to { transform: rotate(360deg); }
`;

export const aniCircle = keyframes`
  0% { stroke-dashoffset: 157; }
  75% { stroke-dashoffset: -147; }
  100% { stroke-dashoffset: -157; }
`;

export const Loading = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: var(--color-fff);
  opacity: 1;
  transition: .5s;
  .loading-circle {
    width: 54px;
    height: 54px;
    animation: ${aniSpin} 3s infinite;
    circle {
      stroke: var(--color-000);
      stroke-width: 4;
      stroke-dasharray: 157;
      stroke-dashoffset: 0;
      fill: none;
      animation: ${aniCircle} 1s infinite;
    }
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
  .obj.vid {
    left: 50%;
    width: 838px;
    margin-left: -419px;
    padding-top: 14vh;
    transition: opacity 0.5s cubic-bezier(0.26, 0.67, 0.48, 0.91);
  }
  .obj.logo {
    padding-top: 18vh;
    img {
      display: inline-block;
      opacity: 0;
      animation: ${aniSlide} 0.5s 5s cubic-bezier(0.26, 0.67, 0.48, 0.91) forwards;
    }
  }
  .obj.tit {
    left: 50%;
    margin-left: -150px;
    padding-top: 37vh;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: radial-gradient(
      circle at 50% 60vh,
      rgb(251, 160, 181) 1vh,
      rgb(252, 70, 170) 40vh,
      rgb(116, 47, 120) 70vh,
      rgba(0, 0, 0, 0) 100vh
    );
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: 80px;
    opacity: 0;
    transform: translate3d(0, 50px, 0);
    transition: transform 0.5s cubic-bezier(0.26, 0.67, 0.48, 0.91);
  }
  .obj.wrap .obj.desc {
    margin-bottom: 40px;
    background-clip: text;
    -webkit-background-clip: text;
    background-image: radial-gradient(
      circle at 50% 200vh,
      rgb(251, 160, 181) 1vh,
      rgb(252, 70, 170) 40vh,
      rgb(116, 47, 120) 70vh,
      rgba(0, 0, 0, 0) 100vh
    );
    -webkit-text-fill-color: transparent;
    font-weight: 600;
    font-size: 52px;
    text-align: left;
  }
  .obj.wrap .obj.link {
    opacity: 0;
    a {
      margin-right: 24px;
      font-size: 24px;
      color: var(--color-f57);
    }
  }
  .obj.wrap {
    top: 50%;
    left: 50%;
    width: 980px;
    height: 100%;
  }
  @media (max-width: 1068px) {
    .obj.wrap {
      width: 640px;
    }
    .obj.wrap .obj.desc {
      font-size: 40px;
    }
  }
  @media (max-width: 734px) {
    .obj.vid {
      width: 478px;
      height: 734px;
      margin-left: -239px;
      padding-top: 24vh;
    }
    .obj.logo {
      padding-top: 22vh;
      img {
        animation: ${aniSlide} 0.5s 2.5s cubic-bezier(0.26, 0.67, 0.48, 0.91) forwards;
      }
    } 
    .obj.tit {
      margin-left: -100px;
      font-size: 54px;
      line-height: 1.2;
    }
    .obj.wrap .obj.desc {
      font-size: 26px;
    }
    .obj.wrap .obj.link a {
      margin-right: 12px;
      font-size: 16px;
      svg {
        position: relative;
        top: 4px;
        width: 14px;
      }
    }
    .obj.wrap {
      width: 70%;
    }
  }
`;

export const Section1 = styled.section`
  overflow: hidden;
  .w-980 {
    width: 980px;
    color: var(--color-f57);    
    h4 {
      font-weight: 600;
    }
    h1 {
      margin: 20px 0 40px;
      font-size: 4.2rem;
    }
    .video-wrap {
      text-align: center;
    }
    p {
      position: relative;
      left: 50%;
      width: 50%;
      margin: 40px 0 200px;
      font-weight: 600;
      font-size: 24px;
      line-height: 1.4;
    }
  }
  .w-100 {
    margin-top: 100px;
    h1 {
      font-weight: 600;
      font-size: 150px;
      color: #1cb4f6;
    }
    .video-wrap {
      width: 1456px;
      height: 704px;
      margin-top: -160px;
      margin-left: -240px;
      video {
        width: 100%;
        height: 100%;
      }
    }
    p {
      width: 420px;
      font-weight: 600;
      font-size: 19px;
      color: var(--color-f57);
      line-height: 1.5;
    }
  }
  @media (max-width: 1068px) {
    .w-980 {
      width: 640px;
    }
    .w-100 {
      h1 {
        font-size: 120px;
      }
      .video-wrap {
        width: 996px;
        height: 542px;
        margin-top: -176px;
        margin-left: -160px;
      }
    }
  }
  @media (max-width: 734px) {
    .w-980 {
      width: 70%;      
      h1 {
        margin: 8px 0 30px;
        font-size: 2.8rem;
      }
      .video-wrap video {
        width: 100%;
      }
      p {
        left: unset;
        width: 100%;
        margin: 30px 0 200px;
        font-size: 15px;
        line-height: 1.5;
      }
    }
    .w-100 {
      margin-top: 80px;
      h1 {
        font-size: 80px;
      }
      .video-wrap {
        width: 536px;
        height: 222px;
        margin-top: -88px;
        margin-left: 0;
      }
      p {
        width: 70%;
        margin-top: 40px;
        font-size: 15px;
      }
    } 
  }
`;

export const Section2 = styled.section`
  overflow: hidden;
  .text-wrap {
    top: 0px;
    left: 50%;
    width: 450px;
    margin-left: -204px;
    color: var(--color-f57);
    transform: translate3d(0, 1000px, 0);
  }
  .text-wrap .txt {
    clear: both;
    position: absolute;
    opacity: 0;
    transform: scale(1) translate3d(0, 300px, 0);    
    li {
      float: left;
      margin: 0 8px;
    }
    .pc {
      display: blcok;
    }
    .m {
      display: none;
    }
  }
  .text-wrap .txt.a {
    opacity: 1;
    transform: scale(1) translate3d(0, 0, 0);
  }
  .img-wrap {  
    top: 0px;
    left: 50%;
    width: 1641px;
    height: 782px;
    margin-left: -820px;
    transform: translate3d(0, 1150px, 0);
  }
  .screen-wrap {
    top: 49px;
    left: 50%;
    width: 324px;
    height: 302px;
    margin-left: -162px;
    picture {
      display: block;
      position: absolute;
      width: 324px;
      height: 302px;
      opacity: 1;
      -webkit-mask-size: contain;
      mask-size: contain;
      -webkit-mask-position: center;
      mask-position: center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-image: url(mask/screen_mask.png);
      mask-image: url(mask/screen_mask.png);
    }
  }
  .stack-wrap {
    top: 0;
    width: 1641px;
    height: 782px;
    picture {
      width: 1641px;
      height: 782px;
      -webkit-mask-size: contain;
      mask-size: contain;
      -webkit-mask-position: center;
      mask-position: center;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-image: url(mask/scenarios_mask.png);
      mask-image: url(mask/scenarios_mask.png);
    }
  }
  @media (max-width: 734px) {
    .text-wrap {
      width: 288px;
      margin-left: -144px;
    }
    .text-wrap .txt {
      li {
        margin: 0 4px;
      }
      .pc {
        display: none;
      }
      .m {
        display: block;
        font-size: 2rem;
      }
    }
    .img-wrap {
      margin-left: -474px;
    }
  }
`;

export const Section3 = styled.section`
  overflow: hidden;
  .w-980 {
    width: 980px;
    height: 1150px;
  }
  .img-wrap .non-brightness {
    right: -140px;
  }
  .img-wrap .brightness {
    right: -140px;
    opacity: 0;
    transition: opacity 1.5s linear;
  }
  .go.in-animate .brightness {
    opacity: 1;
  }
  .text-wrap {
    top: 50%;
    left: 50%;
    width: 420px;
    color: var(--color-f57);
    h1 {
      margin: 12px 0;
    }
    p {
      line-height: 1.5;
    }
  }
  @media (max-width: 1068px) {
    .img-wrap .non-brightness,
    .img-wrap .brightness {
      right: 190px;
    }
    .text-wrap {
      left: 38%;
      width: 300px;
      h4 {
        font-size: 1.4rem;
      }
      h1 {
        margin: 8px 0;
        font-size: 3rem;
      }
    }
  }
  @media (max-width: 734px) {
    .w-980 {
      width: 100%;
      height: 700px;
    }
    .img-wrap .non-brightness,
    .img-wrap .brightness {
      right: 40px;
    }
    .text-wrap {
      top: 48%;
      left: 40%;
      width: 180px;
      h4 {
        font-size: 1.2rem;
      }
      h1 {
        margin: 6px 0;
        font-size: 1.6rem;
      }
    } 
  }
`;