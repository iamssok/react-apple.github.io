import styled from 'styled-components';

export const StoreNavWrapper = styled.div`
  width: 100%;
  padding: 130px 6% 70px;
  .top-tit {
    width: 50%;
    font-weight: 600;
    color: var(--color-666);
    letter-spacing: -1px;
    span {
      font-weight: 700;
      font-size: inherit;
      color: var(--color-111);
    }
  }
  .chat {
    margin: 12px 0;
    img, svg {
      overflow: hidden;
      margin-right: 10px;
      border-radius: 100%;
    }
    p {
      font-size: 0.9rem;
      line-height: 1.4;
    }
    a {
      font-size: 0.9rem;
      color: #06c;
      line-height: 1.4;
    }
  }
  @media (max-width: 734px) {
    flex-direction: column;
    .top-tit {
      width: 100%;
      margin-bottom: 10px;
      font-weight: 700;
      font-size: 30px;
    }
  } 
`;

export const ProductNavWrapper = styled.div`
  overflow-x: scroll;
  gap: 2%;
  width: 100%;
  padding: 0 6% 70px;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .product-nav {
    text-align: center;
    img {
      width: 120px;
    }
    p {
      margin-top: 12px;
      font-weight: 500;
    }
  }
`;

export const StoreTit = styled.h4`
  width: 100%;
  padding: 0 6%;
  font-weight: 600;
  color: var(--color-666);
  letter-spacing: -0.5px;
  span {
    font-size: inherit;
    color: var(--color-111);
  }
  @media (max-width: 734px) {
    font-size: 1.4rem;
  }
`;

export const StoreSlideWrapper = styled.div`
  margin-bottom: 70px;
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
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(2px);
    opacity: 0;
    transform: scale(0.9);
    transition: transform 0.5s ease-in,
      opacity 0.7s cubic-bezier(0.15, 0, 0.2, 1) 0.1s;
    &:after {
      font-size: 22px;
      color: #333;
      text-shadow: -1px 0 #333, 0 1px #333, 1px 0 #333, 0 -1px #333;
    }
  }
  .store-slide:hover .swiper-button-disabled,
  .store-slide:hover .swiper-button-next,
  .store-slide:hover .swiper-button-prev {
    opacity: 1;
    transform: scale(1);
  }    
  .store-slide {
    width: 100%;
    padding: 20px 6% !important;
    .slide-info {
      top: 0;
      padding: 35px 30px 30px;
      &.black-card {
        color: var(--color-f57);
      }
      p:first-child {
        font-size: 0.8rem;
      }
      h4 {
        margin: 8px 0;
      }
    }
  }  

  .store-slide-1 .swiper-slide {
    overflow: hidden;
    max-width: 360px;
    height: 440px;
    border-radius: 30px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.05);
    transition: all 0.5s cubic-bezier(0.15, 0, 0.2, 1) 0.1s;
  }

  .store-slide-2 .swiper-slide {
    max-width: 480px;
    height: 480px;
    .slide-card {
      position: relative;
      height: 230px;
    }
    .slide-card:first-child {
      margin-bottom: 20px;
    }
  }
  .store-slide-2 .slide-card {
    overflow: hidden;
    border-radius: 30px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.05);
    transition: all 0.5s cubic-bezier(0.15, 0, 0.2, 1) 0.1s;
    h5 {
      line-height: 1.4;
    }
  }
  
  .store-slide-3 .swiper-slide {
    overflow: hidden;
    width: 310px !important;
    height: 460px;
    border-radius: 30px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.05);
    background: var(--color-fff);
    transition: all 0.5s cubic-bezier(0.15, 0, 0.2, 1) 0.1s;
    img {
      margin-top: 50px;
    }
    .slide-info {
      top: auto;
      bottom: 0;
      p:first-child {
        height: 18px;
        color: #b64400;
      }
      h5 {
        height: 56px;
      }
    }
  }
  .store-slide-3 .first-card {
    width: 380px !important;
    img {
      margin-top: 0 !important;
    }
    .slide-info {
      top: 0 !important;
    }
  }
    
  .store-slide-1 .swiper-slide:hover,
  .store-slide-2 .slide-card:hover,
  .store-slide-3 .swiper-slide:hover {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
    transform: scale(1.01);
  }
  @media (max-width: 734px) {
    .store-slide-1 .swiper-slide {
      height: 380px;
    }
    .store-slide-2 .swiper-slide {
      height: 400px;
      .slide-card {
        height: 190px;
        .slide-info {
          padding: 25px 30px 30px;
        }
      }
    }
    .store-slide-3 .first-card {
      width: 310px !important;
    }
  }
`;