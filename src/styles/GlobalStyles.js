import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: rgb(41, 45, 52);
    max-width: 100vw;
    min-height: 100vh;
    margin: 0;
    display: block;
    padding: 30px 0;
    box-sizing: border-box;
    > div {
      width: 100%;
      height: 100%;
    }
  }
`;

export default GlobalStyles;
