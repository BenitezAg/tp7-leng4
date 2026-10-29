import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">logo</div>
      <nav className="header__nav">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/proyecto-blob">Proyecto Blob</NavLink>
        <NavLink to="/acerca">Acerca de nosotros</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </nav>
    </header>
  );
}
