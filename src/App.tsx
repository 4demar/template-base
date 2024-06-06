import { GlobalStyle } from './styles/globalStyles';
import { ToastContainer } from 'react-toastify';
import { Sidebar } from './layout/Sidebar';
import { Header } from './layout/Header.old';
import { Conteudo } from './layout/Conteudo';
import { BrowserRouter } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Footer } from './layout/Footer';

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
         <Header />
         <Conteudo />
         <Footer />
      </BrowserRouter>
   );
}

export default App;
