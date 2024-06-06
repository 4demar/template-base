import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { StyleHeader } from '../../styles/layout';
import { Container, Content } from './styles';

interface LogoProps {
   SvgComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
   width?: number;
   height?: number;
}

const Logo: React.FC<LogoProps> = ({ SvgComponent, width = 100, height = 100 }) => {
   return (
      <div>
         <SvgComponent width={width} height={height} />
      </div>
   );
};


interface props {
   titulo: string;
   LogotipoSVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
   width?: number;
   height?: number;
}

export function Header({ titulo, LogotipoSVG, width = 100, height = 100 }: props) {
   return (
      <>

         <Container>
            <Content>
               <div className='rotacao_logo'>
                  <LogotipoSVG width={width} height={height} />
                  {/* <Logotipo className='logotipo' /> */}
               </div>
               <h3 className='texto'>{titulo}</h3>
            </Content>
            <ToastContainer
               position="top-right"
               autoClose={3000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="colored"
            />
         </Container>
      </>

   )
}