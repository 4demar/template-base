import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   :root {
      --backgroundColor: #0b102D;
      --background: #f0f2f5;
      --red: #e52e4d;
      --blue: #5429cc;
      --green: #33cc95;
      
      --blue-light: #6933ff;

      --text-title: #363f5f;
      --text-body: #969cb3;
      --text-dark: #222;

      --background: #f0f2f5;
      --shape: #ffffff;
   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   // font-size: 16px (Desktop)
   // 1rem = font-size da pagina
   //se elementos estiver com rem ira se basear pelo tamanho do font-size
   html { 
      @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
      }

      @media (max-width: 720px) {
      font-size: 87.5%; // 14px
      }
   }

   body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }

   body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
   }

   input {
      font-size: 24px;
   }

   h1, h2, h3, h4, h5, strong {
      font-weight: 600;
   }

   h6 {
      font-size: 90%;
   }

   button {
      cursor: pointer;
   }

   [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
   }
 
   .mouse-pointer{
      cursor: pointer;
   }

   .modalBlur {
      backdrop-filter: blur(3px);
   }

   #scroll {
      max-height: 18.8rem;
      overflow-y: auto;
   }

`
