import { createGlobalStyle } from "styled-components";

/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;padding: 0;
    box-sizing: border-box;
  }
  html {
    height: 100%;
    width: 100%;
    line-height: 1.4;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

  body {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  #root {
    position: relative;
    min-width: 310px;
    min-height: 100%;
    z-index: 0;
    height: 1px; // css hack: https://stackoverflow.com/a/21836870/2343074
  }
  .App{
    height: 100%;
  }
  
`;
