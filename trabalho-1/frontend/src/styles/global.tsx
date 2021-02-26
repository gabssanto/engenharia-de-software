import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html,body,#root {
    min-height: 100%;
  }
  body{
    background: #333;
  }
  body, input, button {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Arial, Helvetica, sans-serif;
    color: #222;
    font-size: 14px;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;