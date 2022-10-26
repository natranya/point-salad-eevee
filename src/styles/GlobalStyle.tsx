import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  a {
    color: black;
    text-decoration: none;
  }

  html, body { 
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #F1EFED;
    width: 100%;
    min-width: 1440px;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
  }

`;

export default GlobalStyle;
