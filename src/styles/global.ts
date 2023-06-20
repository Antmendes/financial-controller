import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 
  :root {
    --backgound: #f0f2f5;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

         // font-size padrao desktop 16 px. em porcentagem permite que o usuario se adapte
  html {
    @media (max-width: 1080px){
        font-size: 93.75%; // 15px
    }

    @media (max-width: 720px){
        font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--backgound);
    -webkit-font-smoothing: antialiased;  // fontes ficam mais nitidas
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }    

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed   // como se fosse nao permitido
  }

`