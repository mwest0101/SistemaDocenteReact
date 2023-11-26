import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './../../aplication/Provider';

const Menu = () => {
  const [state,]=useContext(AppContext);

  return (
    <>
     <div className="nav-item dropdown">
        <a className="nav-link dropdown-toggle " href="login" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img className="imgIco" alt="logo" src="img/ico/user-04.png" />
          <span className="userLinkMenu">{state.user?state.user.usuario:null}</span>
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><Link className="dropdown-item" to="/login">Login</Link></li>
          <li><Link className="dropdown-item" to="/register">Registrar Usuario</Link></li>
          <li><Link className="dropdown-item" to="/modify">Modificar Usuario</Link></li>
          
          <li><Link className="dropdown-item" to="/exit">Salir</Link></li>
        </ul>
      </div>
    </>
  );
};




export default Menu;
