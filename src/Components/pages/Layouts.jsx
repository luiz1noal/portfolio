import { Outlet, useLocation, Link } from 'react-router-dom';
import './Layout.css'

export const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div>
      <nav>
        
        {isHome ? (
          <Link to="/Projeto">Saiba mais</Link>
        ) : (
          <>
            <Link to="/Projeto">Projetos</Link>
            <Link to="/sobre">Sobre mim</Link>
            <Link to="/">Voltar para Home</Link>
          </>
        )}
      </nav>

      <Outlet />
    </div>
  );
};
