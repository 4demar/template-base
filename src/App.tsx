import { GlobalStyle } from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import { Sidebar } from './layout/Sidebar';
import { Conteudo } from './layout/Conteudo';
import { BrowserRouter } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { ReactComponent as LogoSvg } from './assets/logotipo.svg'

function App() {
   const listaSidebar = ([
      { icone: FaHome, texto: "Principal", to: '/' },
      { icone: FaHome, texto: "Pagina 1", to: '/Pagina1' },
      { icone: FaHome, texto: "Pagina 2", to: '/Pagina2' }
   ]);

   return (
      <BrowserRouter>
         <GlobalStyle />
         <ToastContainer />
         <Sidebar listSidebar={listaSidebar} />
         <Header titulo="Template Base" LogotipoSVG={LogoSvg} />
         <Conteudo />
         <Footer />
      </BrowserRouter>
   );
}

export default App;
