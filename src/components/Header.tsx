import { Link } from "react-router-dom";
import NavButton from "./NavButton";

export default function Header() {
  return (
    <header className="header">
      <Link to={"/"} className="logo_container">
        <h1 className="logo">
          Tia Rosa's<span className="logo_child">Coffee Shop</span>
        </h1>
        <img src="/coffee_ico.svg" alt="icone da logo" />
      </Link>
      <nav>
        <li className="nav_buttons">
          <NavButton name={"Inicio"} routeTo={"/"} />
          <NavButton name={"Produtos"} routeTo={"/produtos"} />
          <NavButton name={"Contato"} routeTo={"/contato"} />
        </li>
      </nav>
    </header>
  );
}
