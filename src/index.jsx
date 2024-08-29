import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Pretendard-subset.css';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;  
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    word-break: keep-all;
    @media (max-width: 734px) {
      font-size: 0.9rem;
    }
  }
  body {
    width: 100%;
    min-width: 320px;
    line-height: 1.3;
  }
  ol,ul,li {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  h1 {
    font-size: 3.4rem;
  }
  h2 {
    font-size: 2.8rem;
  }
  h3 {
    font-size: 2.2rem;
  }
  h4 {
    font-size: 1.6rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  h6 {
    font-size: 1rem;
  }
   
  :root {
    --color-000: #000;
    --color-111: #111;
    --color-333: #333;
    --color-666: #666;
    --color-fff: #fff;
    --color-faf: #fafafa;
    --color-fbd: #fbfbfd;
    --color-f57: #f5f5f7;
    --color-06c: #06c;
  }
  .d-block {
    display: block;
  }
  .d-grid {
    display: grid;
  }
  .d-flex {
    display: flex !important;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-column {
    flex-direction: column;
  }
  .flex-space-between {
    justify-content: space-between;
  }
  .flex-space-around {
    justify-content: space-around;
  }
  .flex-justify-center {
    justify-content: center;
  }
  .flex-align-center {
    align-items: center;
  }
  .pos-rel {
    position: relative;
  }
  .pos-abs {
    position: absolute;
  }
  .pos-fixed {
    position: fixed;
  }
  .pos-cnt {
    position: absolute;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
  .x-cnt {
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
  .y-cnt {
    top: 50%;
    transform: translate3d(0, -50%, 0);
  }
  .mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
  }
  
  /**
  * Scroll Motions:
  * fade-up-20, fade-up-100, slide-up-100
  */   
  .fade-up-20 {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
    transition: opacity 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955),
      transform 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  .fade-up-100 {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
    transition: opacity 0.6s linear,
      transform 0.6s cubic-bezier(0.26, 0.67, 0.48, 0.91);
  }
  .slide-up-100 {
    transform: translate3d(0, 100px, 0);
    transition: transform 1.5s cubic-bezier(0.26, 0.67, 0.48, 0.91);
  }
  .go.in-animate .fade-up-20,
  .go.in-animate.fade-up-100,
  .go.in-animate .fade-up-100,
  .go.in-animate .slide-up-100 {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode> 
  </BrowserRouter> 
);
