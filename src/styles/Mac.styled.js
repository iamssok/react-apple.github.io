import styled, { keyframes } from "styled-components";

export const aniSlide = keyframes`
to {
  opacity: 1;
  transform: translate3d(0, 0, 0);
    }
`;

/**
 * ChapterNavWrapper > Swiper.chapter-nav > SwiperSlide.swiper-slide > img, p
 * ChapterNavWrapper > swiper-button-next.chapter-nav-next, swiper-button-prev.chapter-nav-prev
 */
export const ChapterNavWrapper = styled.nav`
  height: 82px;
  margin: 76px 0 26px;
  .chapter-nav {
    margin: 0 36px !important;
    .swiper-slide {
      width: auto !important;
      margin: 0 20px;
      text-align: center;
      p {
        font-size: 0.8rem;
      }
    }
  }
  .swiper-button-next.chapter-nav-next,
  .swiper-button-prev.chapter-nav-prev {
    top: auto;
    width: 36px;
    height: 82px;
    margin-top: 0;
    svg {
      width: 7px;
    }
  }
  .swiper-button-next.chapter-nav-next {
    right: 0;
    border-left: 1px solid #ddd;
  }
  .swiper-button-prev.chapter-nav-prev {
    left: 0;
    border-right: 1px solid #ddd;
  }
  .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after, .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
    display: none;
  }
`;

export const RibbonWrapper = styled.div`
  overflow: hidden;
  .ribbon {
    padding: 10px 0;
    background: var(--color-f57);
    font-size: 0.8rem;
    text-align: center;
    transform: translate3d(0, -100%, 0);
    animation: ${aniSlide} 0.6s 0.5s ease-in-out forwards;
    a {
      margin-left: 5px;
      font-size: 0.8rem;
      color: var(--color-06c);
    }
  }
`;

/**
 * PrologueWrapper > .prologue-tit > h1, p
 * PrologueWrapper > .prologue-video > .video-canvas > video, button
 */
export const PrologueWrapper = styled.div`
  .prologue-tit {
    padding: 60px 6%;
    opacity: 0;
    transform: translate3d(0, 20px, 0);
    animation: ${aniSlide} 0.6s 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
    h1 {
      font-weight: 600;
      font-size: 5rem;
    }
    p {
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
  .prologue-video-wrapper {
    overflow: hidden;
    height: 55vw;
    opacity: 0;
    transform: translate3d(0, 20px, 0);
    animation: ${aniSlide} 0.6s 0.7s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
    .video-canvas {
      overflow: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100vw;
      height: 55vw;
      border-radius: 0px;
      transform: translate3d(-50%, -50%, 0);
    }
    video {
      position: relative;
      top: 50%;
      width: 100%;
      transform: translate3d(0, -50%, 0);
    }
    .video-control {
      right: 20px;
      bottom: 20px;
      width: 36px;
      height: 36px;
      border: 0;
      border-radius: 50%;
      background-color: rgb(232, 232, 237);
      cursor: pointer;
      svg {
        width: 20px;
        height: 20px;
        vertical-align: sub;
      }
      &.control-pause svg path {
        display: none;
      }
      &.control-play svg g {
        display: none;
      }
    }
  }
  @media (max-width: 734px) {
    .prologue-tit {
      flex-direction: column;
      align-items: flex-start !important;
      gap: 10px;
      h1 {
        font-size: 3rem;
      }
    }
    .prologue-video-wrapper {
      .video-control {
        right: 10px;
        bottom: 10px;
      }
    }
  }
`;

export const MacSlideTit = styled.div`
  padding: 0 6% 40px;
  color: var(--color-111);
  letter-spacing: -1px;
  a {
    color: var(--color-06c);
  }
  @media (max-width: 734px) {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 10px;
    padding: 0 6% 30px;
    h1 {
      font-size: 2rem;
    }
  }
`;

/**
 * MacSlideWrapper.macSlide-1 > Swiper.mac-slide > SWiperSlide.swiper-slide > picture,.slide-info
 * MacSlideWrapper.macSlide-3 > Swiper.mac-slide > SWiperSlide.swiper-slide > .slide-info > picture, h4, p
 */
export const MacSlideWrapper = styled.div`
  padding: 140px 0 0; 
  .color-w {
    color: var(--color-fff);
  } 
  .mac-slide,
  .mac-lineUp {
    .swiper-button-disabled {
      opacity: 0 !important;
      transform: scale(0.9);
      transition: transform 0.5s ease-in,
        opacity 0.7s cubic-bezier(0.15, 0, 0.2, 1) 0.1s;
    }  
    .swiper-button-next,
    .swiper-button-prev {
      width: 56px !important;
      height: 56px !important;
      margin-top: -28px !important;
      border-radius: 100%;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(2px);
      opacity: 0;
      transform: scale(0.9);
      transition: transform 0.5s ease-in,
        opacity 0.7s cubic-bezier(0.15, 0, 0.2, 1) 0.1s;
      &:after {
        font-size: 24px;
        color: #333;
        text-shadow: -1px 0 #333, 0 1px #333, 1px 0 #333, 0 -1px #333;
      }
    }  
    &:hover .swiper-button-next,
    &:hover .swiper-button-prev {
      opacity: 1;
      transform: scale(1);
    }
  }
  .mac-slide .swiper-slide picture img {
    position: relative;
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }
  .mac-slide .swiper-slide:hover {
    transform: scale(1.01);
  }  
  &.macSlide-1 .mac-slide {
    height: 46vw;
    min-height: 520px;
    max-height: 680px;
    padding: 10px 6%;
    transition-delay: 0.2s;
    .swiper-slide {
      overflow: hidden;
      width: auto;
      border-radius: 30px;
      transition: all 0.5s cubic-bezier(0.15, 0, 0.2, 1) 0.1s;
      .slide-info {
        top: 0;
        padding: 35px 30px;
        p {
          margin-bottom: 5px;
        }
      }
    }
  }
  &.macSlide-3 {
    padding-bottom: 120px;
    background-color: var(--color-f57);
    .mac-slide {
      padding: 10px 6%;
      transition-delay: 0.2s;
      .swiper-slide {
        overflow: hidden;
        max-width: 370px;
        height: 260px;
        padding: 55px 30px;
        border-radius: 30px;
        background-color: var(--color-fff);
        transition: all 0.5s cubic-bezier(0.15, 0, 0.2, 1) 0.1s;
        .slide-info h4 {
          margin-bottom: 10px;
        }
      }
    }
  }
  .mac-lineUp {
    padding: 0 6% !important;
    .swiper-slide {
      width: auto;
      max-width: 372px;
      margin-right: 0 !important;
      text-align: center;      
      picture {
        display: block;
        position: relative;
        height: 270px;
        margin-bottom: 40px;
        padding: 0 20px;
        img {
          bottom: 0;
        }
      }
      .slide-info .desc {
        margin: 20px 0;
        line-height: 1.4;
      }
      .slide-info .price {
        font-weight: 600;
        font-size: 1.1rem;
      }
      .slide-info .slide-btn {
        padding: 30px 0 70px;
        border-bottom: 1px solid #ccc;
      }
      .slide-btn a:first-child {
        margin-right: 30px;
        padding: 10px 24px;
        border-radius: 50px;
        background-color: var(--color-06c);
        color: var(--color-fbd);
      }
      .slide-btn a:last-child {
        color: var(--color-06c);
      }
      .slide-detail-info {
        gap: 50px;
        margin: 60px 0;
        padding: 0 40px;
      }
      .slide-detail-info div {
        width: 100%;
        height: 80px;
      }
      .slide-detail-info h4 {
        margin-bottom: 10px;
      }
      .slide-detail-info p {
        font-size: 0.7rem;
        color: var(--color-666);
        line-height: 1.6;
      }
      .slide-detail-info picture {
        height: auto;
        margin-bottom: 0;
      }
    }
  }
`;

/**
 * MacSlideWrapper.macSlide-2 > TabWrapper > .tabs > .tab
 */
export const TabWrapper = styled.div`
  padding: 0 6% 50px;
  &.tabs {
    transition-delay: 0.2s;
  }
  .tab {
    margin-right: 10px;
    padding: 10px 24px;
    border-radius: 50px;
    background-color: #fafafa;
    cursor: pointer;
    &.on {
      background-color: var(--color-111);
      color: var(--color-f57);
    }
  }
`;

/**
 * MacSlideWrapper.macSlide-2 > TabContWrapper > .tab-cont
 * .tab-cont > Swiper.mac-lineup > SwiperSlide.swiper-slide > picture, .slide-info
 * .slide-info > h4, h6, .desc, .price, .slide-btn, .slide-detail-info
 */
export const TabContWrapper = styled.div`
  position: relative;
  height: 1080px;
  &.tab-conts {    
    transition-delay: 0.4s;
  }
  .tab-cont {
    visibility: hidden;
    position: absolute;
    width: 100%;
    opacity: 0;
    transition: opacity 0.5s;
    &.on {
    visibility: visible;
      opacity: 1;
    }
  }
  @media (max-width: 734px) {
    .mac-lineUp {
      .swiper-slide {
        width: 304px;
        text-align: left;
        picture {
          height: 180px;
          margin-bottom: 40px;
          padding: 0;
          img {
            left: 0;
            transform: translateX(0);
          }
        }
        .slide-info .desc {
          margin: 15px 0;
        }
        .slide-info .slide-btn {
          justify-content: flex-start !important;
          padding: 30px 0 60px;
        }
        .slide-detail-info {
          gap: 40px;
          margin: 50px 0;
          padding: 0 40px 0 0;
          p {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
`;

/**
 * AccordionWrapper > .info-wrapper > .info-box > .info-accordion, .info-image
 */
export const AccordionWrapper = styled.div`
  padding: 140px 0 0; 
  .info-wrapper {
    padding: 0 6% 140px;
    transition-delay: 0.2s;
    .info-box {
      overflow: hidden;
      border-radius: 30px;
      background-color: var(--color-faf);
    }
    .info-accordion {
      width: 100%;
      padding: 100px 80px 100px;        
    }
    .info-image {
      padding: 80px 60px 80px 0;
    }
  }
  @media (max-width: 1068px) {
    .info-accordion {
      padding: 50px;
    }
    .info-image {
      display: none;
    }
  }
  @media (max-width: 734px) {
    .info-wrapper {
      padding: 0 6% 90px;
      .info-accordion {
        padding: 30px;
      }
    }
  }
}
`;

/**
 * Accordion > .accordion-tit, .accor-cont > p, picture
 */
export const Accordion = styled.div`
  width: 340px;                  
  &.on .accordion-tit .accordion-icon {
    transform: rotate(0deg);
  }
  &:first-child a {
    border-top: 0;
  }
  .accordion-tit {
    display: block;
    padding: 20px 0;
    border-top: 1px solid #ccc;
    font-weight: 500;
    font-size: 1.6rem;
    cursor: pointer;
    .accordion-icon {
      float: right;
      width: 1.2rem;
      margin-top: 10px;
      color: var(--color-666);
      stroke-width: 2px;
      transform: rotate(180deg);
      transition: transform 0.3s;
    }
  }  
  .accor-cont {
    overflow: hidden;
    height: 0px;
    transition: height ease-in-out 400ms;
    p {
      padding: 0 30px 20px 0;
      line-height: 1.5;
    }
    picture {
      display: none;
      padding: 20px 0;
    }
  }
  @media (max-width: 1068px) {
    width: 100%;
    .accor-cont p {
      padding: 0;
    }
    .accor-cont picture {
      display: block;
    }
  }
  @media (max-width: 734px) {
    .accordion-tit {
      font-size: 1.4rem;
    }
  }
`;