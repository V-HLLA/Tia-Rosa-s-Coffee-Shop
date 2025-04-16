"use client";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NAV_CONTENTS } from "../../lib/constants";
import CoffeeIcon from "../../../public/coffee_ico.svg";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <Link href={"/"} className="logo_container animate-on-load">
        <h1 className="logo">
          Tia Rosa's<span className="logo_child">Coffee Shop</span>
        </h1>
        <CoffeeIcon className="coffee-icon-svg" />
      </Link>

      <ThemeToggle />
      {/* nav hamburguer menu */}
      <nav className="nav_container">
        <button
          className={isOpen ? "menu-isOpen" : "menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <i className="hamburguer-button">
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </i>
        </button>
        <ul className={isOpen ? `nav_buttons--isOpen` : `nav_buttons`}>
          {NAV_CONTENTS.map(({ routeName, routeTo }, index) => (
            <li key={index}>
              <Link
                href={routeTo}
                onClick={() => {
                  if (isOpen) {
                    setIsOpen((prev) => !prev);
                  }
                }}
              >
                {routeName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
