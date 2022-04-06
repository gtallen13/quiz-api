import { useSelector } from "react-redux"
import { NavLink, useLocation } from "react-router-dom";

import "./Nav.css";
const Nav = ()=>{
  const {_id, roles} = useSelector((state)=>state.security);
  const currentLocation = useLocation();
  if (_id) {
    return (
      <nav>
        <ul>
          <li>
            <NavLink
              to='/agregar'
              className={currentLocation.pathname === '/agregar' ? 'active' : ''}
            >
              Agregar
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contribuciones'
              className={currentLocation.pathname === '/contribuciones' ? 'active' : ''}
            >
              Tus Contribuciones
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/solicitud'
              className={currentLocation.pathname === '/solicitud' ? 'active' : ''}
            >
              Solicita Preguntas
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to='/'
            className={currentLocation.pathname === '/'?'active':''}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login'
            className={currentLocation.pathname === '/login' ? 'active' : ''}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/signin'
            className={currentLocation.pathname === '/signin' ? 'active' : ''}
          >
            Signin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
