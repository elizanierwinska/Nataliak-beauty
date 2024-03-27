import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (<div className="navbar">
    <Link to={"/"}>
      <h1>NataliaK Beauty</h1>
    </Link>
    <div className="links">
      <NavLink className={({isActive}) => isActive ? "active-link" : null} to={"/cennik"}>Cennik</NavLink>
      <NavLink className={({isActive}) => isActive ? "active-link" : null} to={"/umow-wizyte"}>Umów wizytę</NavLink>
      <NavLink className={({isActive}) => isActive ? "active-link" : null} to={"/zalecenia"}>Zalecenia</NavLink>
      <NavLink className={({isActive}) => isActive ? "active-link" : null} to={"/regulamin"}>Regulamin</NavLink>
      <NavLink className={({isActive}) => isActive ? "active-link" : null} to={"/ankieta"}>Ankieta</NavLink>
      <NavLink className={({isActive}) => isActive ? "active-link" : null} to={"/portfolio"}>Portfolio</NavLink>
    </div>
  </div>)
}

export default Navbar;