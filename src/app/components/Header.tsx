"use client";
import Link from "next/link";
import NavButton from "./NavButton";
import { useState } from "react";
import { NAV_CONTENTS } from "../../lib/constants";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <Link href={"/"} className="logo_container animate-on-load">
        <h1 className="logo">
          Tia Rosa's<span className="logo_child">Coffee Shop</span>
        </h1>
        <Image
          src="/coffee_ico.svg"
          alt="icone da logo"
          width={30}
          height={30}
        />
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
          {NAV_CONTENTS.map((navContent, index) => (
            <NavButton
              key={index}
              children={navContent.children}
              routeTo={navContent.routeTo}
              setIsOpen={setIsOpen}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}
