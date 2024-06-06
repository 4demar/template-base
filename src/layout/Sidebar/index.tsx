import React, { useState } from "react";
import { IconType } from "react-icons";
import { Container } from './styles'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export type SidebarType = {
    icone: IconType,
    texto: string;
    to: string;
};

type SidebarProps = {
    listSidebar: SidebarType[];
};

export function Sidebar({ listSidebar }: SidebarProps) {

    const [sidebar, setSidebar] = useState(false)
    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <>
            <Container sidebar={sidebar} >
                {sidebar
                    ?
                    <>
                        <nav className="menu-lateral">
                            <div className="btn-expandir">
                                <FaTimes onClick={showSiderbar} />
                            </div>
                            <ul>
                                {listSidebar.map((item) => (
                                    <Link className="link" to={item.to} onClick={showSiderbar}>
                                        <li className="item-menu">
                                            <span className="icon"><item.icone /></span>
                                            <span className="texto">{item.texto}</span>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                        <div className="fechaMenu" onClick={showSiderbar}></div>
                    </>
                    :
                    <FaBars onClick={showSiderbar} />
                }
            </Container>
        </>
    )
}