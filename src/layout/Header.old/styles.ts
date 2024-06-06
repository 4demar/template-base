import styled from "styled-components";

export const Container = styled.header`
   background: var(--blue);
   margin: 0;
`;

export const Content = styled.div`
   margin: 0 auto;
   height: auto;
   padding: 10px;
   display: flex;
   flex-direction: column;
   align-items: center; //alinhamento vertical
   justify-content: center; //alinhamento horizontal

   .logotipo {
      height: 6rem;
   }

   .texto {
      margin: 10px 0 0 0;
      padding: 0;
   }

   .rotacao_logo {
      transform: rotate(360deg);
      animation: App-logo-spin infinite 10s linear;
   }
      
`;