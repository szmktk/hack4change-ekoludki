import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Epilogue', sans-serif;
    max-width: 100%;
    overflow: hidden;
  }
`

export default GlobalStyles;