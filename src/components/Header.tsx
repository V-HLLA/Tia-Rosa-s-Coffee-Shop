import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import { useState } from "react";
import { TProps } from "../lib/types";

export default function Header({ handleClick }: TProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <Link
        to={"/"}
        className="logo_container animate-on-load"
        onClick={() => handleClick()}
      >
        <h1 className="logo">
          Tia Rosa's<span className="logo_child">Coffee Shop</span>
        </h1>
        <img src="/coffee_ico.svg" alt="icone da logo" />
      </Link>

      {/* nav hamburguer menu */}
      <nav className="nav_container">
        <button
          className={isOpen ? "menu-isOpen" : "menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <i className="material-symbols-outlined">
            {isOpen ? "close" : "menu"}
          </i>
        </button>
        <ul className={isOpen ? `nav_buttons--isOpen` : `nav_buttons`}>
          <NavButton
            children={"Inicio"}
            routeTo={"/"}
            handleClick={handleClick}
            setIsOpen={setIsOpen}
          />
          <NavButton
            children={"Produtos"}
            routeTo={"/produtos"}
            handleClick={handleClick}
            setIsOpen={setIsOpen}
          />
          <NavButton
            children={"Contato"}
            routeTo={"/contato"}
            handleClick={handleClick}
            setIsOpen={setIsOpen}
          />
        </ul>
      </nav>
    </header>
  );
}
