import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (<nav className="navbar">
    <Link to={"/"} className="title" onClick={() => {
      setMenuOpen(false)}}>
      <h1>NataliaK Beauty</h1>
    </Link>
    <div className="menu" onClick={() => {
      setMenuOpen(!menuOpen);
    }}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <ul className={menuOpen ? "open" : ""}>
      <li>
        <NavLink to={"/cennik"} onClick={() => {
      setMenuOpen(false);
    }}>Cennik</NavLink>
      </li>
      <li>
        <NavLink to={"/umow-wizyte"} onClick={() => {
      setMenuOpen(false);
    }}>Umów wizytę</NavLink>
      </li>
      <li>
        <NavLink to={"/zalecenia"} onClick={() => {
      setMenuOpen(false);
    }}>Zalecenia</NavLink>
      </li>
      <li>
        <NavLink to={"/regulamin"} onClick={() => {
      setMenuOpen(false);
    }}>Regulamin</NavLink>
      </li>
      <li>
        <NavLink to={"/ankieta"} onClick={() => {
      setMenuOpen(false);
    }}>Ankieta</NavLink>
      </li>
      <li>
        <NavLink to={"/portfolio"} onClick={() => {
      setMenuOpen(false);
    }}>Portfolio</NavLink>
      </li>
    </ul>
  </nav>)
}

export default Navbar;