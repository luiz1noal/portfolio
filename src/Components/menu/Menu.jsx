import { Link } from "react-router-dom"
import React, { useState } from 'react';
import './Menu.css'


export const Menu = () => {
    const [backgroundColor] = useState('#282c34');
    return (
        <nav className="menu" style={{ backgroundColor }}>

            <Link to='/'>Home</Link>
            <Link to='/Projeto'>Projetos</Link>
            <Link to='/Sobre'>Sobre Mim</Link>
            <Link to='/Contato'>Contato</Link>
        </nav>

    )
}