import { Link } from "react-router-dom"
import './Menu.css'


export const Menu = ()  => {
    return (
        <nav>

            <Link to='/'>Home</Link>
            <Link to='/Projeto'>Projetos</Link>
            <Link to='/Sobre'>Sobre Mim</Link>

        </nav>
        
    )
}