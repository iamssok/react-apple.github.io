import styled from 'styled-components';

export const ContainerFluid = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const UnitCopyWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  text-align: center;
  h1 {
    margin: 70px 0 0;
    font-weight: 500;
  }
  h2 {
    margin: 50px 0 0;
    font-weight: 500;
  }
  h4 {
    margin-bottom: 15px;
    font-weight: 400;
  }
  h5 {
    margin-bottom: 10px;
    font-weight: 400;
  }
  .blue-link {
    display: inline-block;
    margin: 0 5px;
    padding: 9px 20px;
    border-radius: 100px;
    background-color: var(--color-06c);
    color: var(--color-fff);
    line-height: 1.5;
  }
  .blueLine-link {
    display: inline-block;
    margin: 0 5px;
    padding: 9px 20px;
    border: 1px solid var(--color-06c);
    border-radius: 100px;
    background-color: transparent;
    color: var(--color-06c);
    line-height: 1.5;
    transition: all 0.15s;
    &:hover {
      background-color: var(--color-06c);
      color: var(--color-fff);
    }
  }
  @media (max-width: 734px) {
    h1, h2 {
      margin: 50px 0 4px;
      font-weight: 600;
      font-size: 34px;
    }
    h4, h5 {
      margin-bottom: 10px;
      font-size: 16px;
    }
  }
`;

export const UnitImageWrapper = styled.div`
  overflow: visible;
  width: 100%;
  height: 100%; 
`;

export const Module1 = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 700px;
  background-color: var(--color-000);
  color: var(--color-fff);
  &:first-child {
    height: 780px;
    margin-bottom: 10px;
    padding-top: 80px;
    .unit-copy-wrapper {
      bottom: 80px;
      h1 {
        background-clip: text;
        -webkit-background-clip: text;
        background-image: linear-gradient(0deg, #dcdfeb 0%, #32323b 100%);
        -webkit-text-fill-color: transparent;
        letter-spacing: -1px;
      }
    }
  }
  &:nth-child(3) {
    height: 600px;
    background: var(--color-fff);
    color: var(--color-000);
  }
  &:last-child {
    margin-bottom: 10px;
  }
  &.col-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .unit-image {
    bottom: 0;
    width: 3008px;
    height: 736px;
  }
  @media (max-width: 734px) {
    height: 500px !important;
    &:first-child .unit-copy-wrapper {
      bottom: 40px;
    }
    .unit-image {
      bottom: 0;
      width: 734px;
      height: 548px;
    }
  }
`;

export const Button = styled.button`
  &.video-control {
    overflow: hidden;
    right: 20px;
    bottom: 20px;
    z-index: 1;
    width: 36px;
    height: 36px;
    border: 0;
    background: none;
    cursor: pointer;
    outline: none;
    @media (max-width: 734px) {
      right: 10px;
      bottom: 10px;
    }
  }
  &.video-control:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(66, 66, 69, 0.72);
  }
  &.video-control:after {
    content: "";
    position: absolute;
    top: 8px;
    left: 8px;
    width: 20px;
    height: 20px;
    mask-size: cover;
    -webkit-mask-size: cover;
    background-size: 20px 20px;
    background-color: rgba(255, 255, 255, 0.8);
  }
  &.control-pause:after {
    mask: url("data:image/svg+xml;base64,PHN2ZyBpZD0iRXhwb3J0YWJsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjAgMjAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMWQxZDFmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0icGF1c2UiPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMy43NSIgeT0iMyIgd2lkdGg9IjQuNSIgaGVpZ2h0PSIxNCIgcng9IjEuNSIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTEuNzUiIHk9IjMiIHdpZHRoPSI0LjUiIGhlaWdodD0iMTQiIHJ4PSIxLjUiLz48L2c+PC9zdmc+");
    -webkit-mask: url("data:image/svg+xml;base64,PHN2ZyBpZD0iRXhwb3J0YWJsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjAgMjAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojMWQxZDFmO308L3N0eWxlPjwvZGVmcz48ZyBpZD0icGF1c2UiPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMy43NSIgeT0iMyIgd2lkdGg9IjQuNSIgaGVpZ2h0PSIxNCIgcng9IjEuNSIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTEuNzUiIHk9IjMiIHdpZHRoPSI0LjUiIGhlaWdodD0iMTQiIHJ4PSIxLjUiLz48L2c+PC9zdmc+");
  }
  &.control-play:after {
    mask: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PGc+PHBhdGggZD0iTTUsMTUuMjVWNC43N0ExLjQ0LDEuNDQsMCwwLDEsNi40NCwzLjE1YTEuODYsMS44NiwwLDAsMSwxLjExLjMxbDguNTMsNWMuNzYuNDQsMS4xNy44LDEuMTcsMS41MXMtLjQxLDEuMDctMS4xNywxLjUxbC04LjUzLDVhMS44NiwxLjg2LDAsMCwxLTEuMTEuMzFBMS40MiwxLjQyLDAsMCwxLDUsMTUuMjVaIi8+PC9nPjwvc3ZnPg==");
    -webkit-mask: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+PGc+PHBhdGggZD0iTTUsMTUuMjVWNC43N0ExLjQ0LDEuNDQsMCwwLDEsNi40NCwzLjE1YTEuODYsMS44NiwwLDAsMSwxLjExLjMxbDguNTMsNWMuNzYuNDQsMS4xNy44LDEuMTcsMS41MXMtLjQxLDEuMDctMS4xNywxLjUxbC04LjUzLDVhMS44NiwxLjg2LDAsMCwxLTEuMTEuMzFBMS40MiwxLjQyLDAsMCwxLDUsMTUuMjVaIi8+PC9nPjwvc3ZnPg==");
  }
`;

export const Video = styled.video`
  width: 3008px;
  height: 692px;
  @media (max-width: 734px) {
    bottom: 0;
    width: 1820px;
    height: 450px;
  }
`;

export const Module2 = styled.div`
  overflow: hidden;
  position: relative;
  height: 580px;
  &:nth-child(2),
  &:nth-child(3) {
    background: var(--color-000);
    color: var(--color-fff);
  }
  &.col-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .unit-image {
    width: 1262px;
    height: 580px;
  }
  @media (min-width: 768px) {
    &.col-md-6 {
      flex: 0 0 auto;
      width: 50%;
    }
  }  
  @media (max-width: 734px) {
    height: 500px !important;
    &:nth-child(3) {
      background: var(--color-fff);
      color: var(--color-000);
    }
    .unit-image {
      bottom: 0;
      width: 734px;
      height: 548px;
    }
  }
`;

/**
 * TvPlusWrapper > Swiper.swiper > .swiper-wrapper > SwiperSlide.swiper-slide
 * TvPlusWrapper > Swiper.swiper > .swiper-pagination > .swiper-pagination-bullet
 * SwiperSlide.swiper-slide > picture > img
 * SwiperSlide.swiper-slide > .slide-copy-wrapper > .watchNow, p
 * SwiperSlide.swiper-slide > InfoTop > .atv-plus-icon, .logo
 */
export const TvPlusWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  .swiper-slide {
    overflow: hidden;
    opacity: 0.4;
    transition: opacity 0.5s;
    img {
      width: 100%;
    }
    .slide-copy-wrapper {
      bottom: 35px;
      left: 50px;
      width: 75%;
      opacity: 0;
      transform: translate3d(0, 20px, 0);
      transition: all 0.4s 0.6s cubic-bezier(0.4, 0, 0.6, 1);
      .watchNow {
        width: 140px;
        height: 46px;
        border-radius: 100px;
        background-color: var(--color-fff);
        font-weight: 700;
        font-size: 13px;
        color: var(--color-000);
        text-align: center;
        line-height: 46px;
        opacity: 1;
        transition: opacity 0.2s;
        &:hover {
          opacity: 0.9;
        }
      }
      p {
        margin-left: 25px;
        font-weight: 500;
        font-size: 19px;
        color: var(--color-fff);
        text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.6);
      }
    } 
  }  
  .swiper-slide-active {
    opacity: 1;
    .slide-copy-wrapper {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  .swiper-pagination {
    position: relative;
    bottom: 0 !important;
    margin: 10px 0 20px;
    .swiper-pagination-bullet {
      background-color: rgba(0, 0, 0, 0.6);
    }
    .swiper-pagination-bullet-active {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
  @media (min-width: 1441px) {
    .swiper-slide {
      width: 1250px;
      height: 668px;
    }
  }
  @media (max-width: 1440px) {
    .swiper-slide {
      width: 980px;
      height: 524px;
      .slide-copy-wrapper {
        bottom: 25px;
      }
    } 
  }
  @media (max-width: 1068px) {
    .swiper-slide {
      width: 688px;
      height: 368px;
      .slide-copy-wrapper {
        bottom: 20px;
        .watchNow {
          width: 120px;
          height: 40px;
          font-size: 12px;
          line-height: 40px;
        }
        p {
          margin-left: 20px;
          font-size: 16px;
        }
      }
    }
  }
  @media (max-width: 734px) {
    .swiper-slide {
      width: 274px;
      height: 495px;
      .slide-copy-wrapper {
        flex-wrap: wrap;
        flex-direction: column-reverse;
        justify-content: center;
        bottom: 30px;
        left: 0 !important;
        width: 100% !important;
        p {
          margin-bottom: 12px;
          margin-left: 0;
          padding: 0 2rem;
          font-size: 15px;
          text-align: center;
          line-height: 20px;
        }
      }
    }
  }
`;

export const InfoTop = styled.div`
  display: none;
  top: 0;
  .atv-plus-icon {
    width: 68px;
    height: 33px;
    margin: 20px auto 6px;
    background-size: 68px 27px;
    background-repeat: no-repeat;
    background-image: url(https://www.apple.com/v/home/bn/images/tv-plus-gallery/logo_hero_light__d7t8cya4x26a_small.png);
  }
  .logo {
    width: 274px;
    height: 54px;
    margin: 0 auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top center;
  }
  @media (max-width: 734px) {
    display: block;
  }
`;