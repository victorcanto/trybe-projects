import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --beer: #DCD5CE;
    --orange: #F49F1C;
    --dark-gray: #3A405A;
    --pink: #EF476F;
    --blue: #7B8CDE;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: var(--dark-gray);
    border: none;
  }

  h1, h2, h3, h4 {
    font-family: 'Ubuntu', sans-serif;
  }

  a, p, span, div, button {
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: var(--beer);
  }

  a {
    text-decoration: none;
  }

  input {
    border-radius: 15px;
  }

  button {
    border-radius: 15px;
  }
`;

export default GlobalStyle;
