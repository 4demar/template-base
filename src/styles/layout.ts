import styled from "styled-components"

export const StyleHeader = styled.div`
   width: 100%;
   height: 70px;
   background-color: var(backgroundColor); 
   box-shadow: 0 0 20px 2px;
   display: flex;
   align-items: center;
   justify-content: center;

   user-select: none;
   -moz-user-select: none;
   -webkit-user-select: none;
   -ms-user-select: none;

   .texto {
      color: #222;
      width: auto;
   }
`;

export const StyleConteudo = styled.div`
   margin: 0 auto;
   padding: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   width: auto;
   height: auto;
`;

export const StyleFooter = styled.div`
   box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
   background: #fff;
   width: 100%;
   height: 80px;
   padding: 10px;
   align-content: center; //centro linha
   text-align: center; //centro coluna
   position: relative;
   left: 0;
`;

export const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

