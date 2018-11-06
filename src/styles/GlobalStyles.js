import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: rgb(41, 45, 52);
    max-width: 100vw;
    min-height: 100vh;
    margin: 0;
    display: block;
    padding: 0 0 30px;
    box-sizing: border-box;
    position: relative;
  }

  div#root {
    display: block;
    position: relative;
    width: 100%;
    min-height: 100%;
  }
`;

export default GlobalStyles;
