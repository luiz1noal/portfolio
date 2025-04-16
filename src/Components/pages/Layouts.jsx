import { Outlet, useLocation, Link } from 'react-router-dom';
import './Layout.css';
import { Banner } from './Banner';

export const Layout = () => {
  const location = useLocation();
  const NaHome = location.pathname === '/';

  return (
    <div>
      {NaHome && <Banner />}
      
      <nav className={NaHome ? 'home-nav' : 'default-nav'}>
        {NaHome ? (
          <Link to="/Projeto" className="saiba-mais">Saiba mais</Link>
        ) : (
          <>
            <Link to="/Projeto">Projetos</Link>
            <Link to="/sobre">Sobre mim</Link>
            <Link to="/Contato">Contato</Link>
            <Link to="/">Voltar para Home</Link>
          </>
        )}
      </nav>

      <Outlet />
    </div>
  );
};
