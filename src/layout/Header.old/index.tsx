
import logo from '../../assets/logo.svg'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { StyleHeader } from '../../styles/layout';
import { Container, Content } from './styles';
import { Logotipo } from './logotipo';

export function Header() {
   return (
      <>

         <Container>
            <Content>
               <div className='rotacao_logo'>
                  <Logotipo className='logotipo' />
               </div>
               <h3 className='texto'>Projeto Base 4</h3>
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