import { Route, Routes } from "react-router-dom";
import { StyleConteudo } from "../../styles/layout";
import { Pagina1 } from "../../pages/page1";
import { Pagina2 } from "../../pages/page2";

export function Conteudo() {

   return (
      <StyleConteudo>
         <Routes>
            <Route path="/"></Route>
            <Route path="/Pagina1" element={<Pagina1 />} />
            <Route path="/Pagina2" element={<Pagina2 />} />
            {/* 
                <Route path="/CadastroUsuario" element={ValidaPermissao(Enum_Permissao.CADASTRO, <CadastroUsuario />)} />
                <Route path="/TabelaDinamica" element={<TabelaDinamica />} /> 
                */}
         </Routes>
      </StyleConteudo>
   )
}