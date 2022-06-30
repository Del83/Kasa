import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./layout.css";

function Header() {
  let activeStyle = { textDecoration: "underline" };

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <nav className="header-nav">
        <NavLink className="header-link" to="/home" style={({ isActive }) => isActive ? activeStyle : undefined }>
          Accueil
        </NavLink>

        <NavLink className="header-link" to="/about" style={({ isActive }) => isActive ? activeStyle : undefined}>
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
